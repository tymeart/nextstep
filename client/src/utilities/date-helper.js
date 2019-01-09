export function timeSince(date) {
  var seconds = Math.floor((new Date() - Date.parse(date)) / 1000);

  var interval = Math.floor(date / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

// Last Updated column in tracker
export function formatDate(date) {
  const fDate = new Date(date);
  return fDate.toDateString();
}
