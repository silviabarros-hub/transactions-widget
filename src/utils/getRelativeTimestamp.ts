import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const getRelativeTimestamp = (timestamp: string): string => {
  return dayjs(timestamp).fromNow();
};
