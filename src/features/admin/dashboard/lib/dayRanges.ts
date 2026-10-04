// Nigeria is UTC+1 all year (no daylight saving), so "today" starts at 23:00 UTC the day before.
const WAT_OFFSET_MS = 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

export function getDayRangesWAT(now: Date = new Date()) {
  const watNow = now.getTime() + WAT_OFFSET_MS;
  const todayStartMs = Math.floor(watNow / DAY_MS) * DAY_MS - WAT_OFFSET_MS;

  return {
    todayStart: new Date(todayStartMs).toISOString(),
    yesterdayStart: new Date(todayStartMs - DAY_MS).toISOString(),
  };
}