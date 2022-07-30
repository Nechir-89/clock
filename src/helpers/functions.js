export default function findTimezone(date) {
  const s = date.toString();
  const index = s.indexOf('(');
  return s.slice(index + 1, s.length - 1)
}