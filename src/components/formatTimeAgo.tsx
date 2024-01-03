export function formatTimeAgo(inputTime: Date) {
  const inputDatetime: any = new Date(inputTime);
  const currentDatetime: any = new Date();

  const timeDifference = currentDatetime - inputDatetime;

  const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
  const months = Math.floor(
    (timeDifference % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000)
  );
  const weeks = Math.floor(
    (timeDifference % (30 * 24 * 60 * 60 * 1000)) / (7 * 24 * 60 * 60 * 1000)
  );
  const days = Math.floor(
    (timeDifference % (7 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );
  const hours = Math.floor(
    (timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );

  if (years > 0) {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (weeks > 0) {
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }
}
