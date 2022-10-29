export const parseTime = (timeString) => {
  const time = timeString.substring(0, 2);
  const min = timeString.substring(2, 4);
  return `${time}시 ${min}분`;
};
