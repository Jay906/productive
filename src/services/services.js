export function convertSeconds(secs) {
  const mins = Math.floor(secs / 60);
  return {
    mins,
    secs: secs % 60,
  };
}
