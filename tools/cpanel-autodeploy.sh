#!/bin/bash
# Therapo — به‌روزرسانی خودکار سایت روی هاست cPanel (با Cron Job)
#
# هر بار اجرا: اگر روی GitHub نسخه تازه‌ای آمده باشد، آن را در مخزنِ روی هاست می‌گیرد (pull) و مثل دکمه
# «Deploy HEAD Commit» منتشر می‌کند (همان کارهای فایل .cpanel.yml). اگر چیزی تازه نباشد، کاری نمی‌کند.
# config.php و پایگاه داده (حساب‌ها، پیشرفت، سفارش‌ها) دست نمی‌خورند.
#
# Cron Job در cPanel (هر ۱۵ دقیقه؛ USERNAME و مسیر مخزن را با مال خودتان عوض کنید):
#   */15 * * * * /bin/bash /home/USERNAME/repositories/trapo/tools/cpanel-autodeploy.sh >/dev/null 2>&1
#
# گزارش: ~/trapo-autodeploy.log      اجرای دستی و انتشار حتی بدون تغییر:  bash tools/cpanel-autodeploy.sh --force

# همه کار داخل main است تا اگر pull همین فایل را عوض کند، اجرای فعلی به هم نخورد
main() {
  local REPO LOG STATE LOCK FORCE=0 BRANCH OLD NEW LAST
  REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
  LOG="$HOME/trapo-autodeploy.log"
  STATE="$HOME/.trapo-deployed"
  LOCK="$HOME/.trapo-autodeploy.lock"
  [ "$1" = "--force" ] && FORCE=1
  export PATH="/usr/local/cpanel/3rdparty/lib/path-bin:/usr/local/bin:/usr/bin:/bin:$PATH"

  log() { echo "$(date '+%Y-%m-%d %H:%M:%S') $*" >> "$LOG"; }

  # دو اجرای هم‌زمان نه
  exec 9> "$LOCK"
  if command -v flock >/dev/null 2>&1 && ! flock -n 9; then return 0; fi

  cd "$REPO" || { log "خطا: مخزن پیدا نشد ($REPO)"; return 1; }
  BRANCH="$(git rev-parse --abbrev-ref HEAD)"
  OLD="$(git rev-parse HEAD)"

  if ! git fetch -q origin "$BRANCH" 2>> "$LOG"; then
    log "خطا: دریافت از GitHub نشد (اتصال یا کلید SSH را بررسی کنید)"; return 1
  fi
  if [ "$(git rev-parse "origin/$BRANCH")" != "$OLD" ]; then
    if ! git merge -q --ff-only "origin/$BRANCH" >> "$LOG" 2>&1; then
      log "خطا: مخزن روی هاست تغییر دستی دارد و به‌روز نشد؛ فایل‌های مخزن را روی هاست ویرایش نکنید"; return 1
    fi
  fi
  NEW="$(git rev-parse HEAD)"
  LAST="$(cat "$STATE" 2>/dev/null)"
  [ "$FORCE" = 0 ] && [ "$NEW" = "$LAST" ] && return 0

  log "نسخه تازه $(git log -1 --format='%h %s' "$NEW")"
  if command -v uapi >/dev/null 2>&1 && uapi --output=json VersionControlDeployment create repository_root="$REPO" 2>> "$LOG" | grep -q '"status":1'; then
    log "انتشار در صف cPanel گذاشته شد (همان Deploy HEAD Commit)"
  else
    # اگر uapi در دسترس نبود: کارهای .cpanel.yml همین‌جا یکی‌یکی اجرا می‌شوند
    log "uapi در دسترس نبود؛ اجرای مستقیم کارهای .cpanel.yml"
    local script
    script="$(awk '/^[[:space:]]*tasks:/ {t=1; next} t && /^[[:space:]]*- / {sub(/^[[:space:]]*- /, ""); if ($0 ~ /^'"'"'.*'"'"'$/) $0 = substr($0, 2, length($0) - 2); print}' .cpanel.yml)"
    if ! bash -e -c "$script" >> "$LOG" 2>&1; then log "خطا در انتشار"; return 1; fi
    log "انتشار انجام شد"
  fi
  echo "$NEW" > "$STATE"
  # گزارش بی‌نهایت بزرگ نشود
  tail -n 300 "$LOG" > "$LOG.tmp" 2>/dev/null && mv "$LOG.tmp" "$LOG"
}
main "$@"; exit $?
