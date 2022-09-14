import dayjs from 'dayjs';

export const getMonth = (month = dayjs().month()) => {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
};

export const labelColors = {
  indigo: 'rgba(99, 102, 241, 1)',
  gray: 'rgba(107, 114, 128, 1)',
  green: 'rgba(16, 185, 129, 1)',
  blue: 'rgba(59, 130, 246, 1)',
  red: 'rgba(239, 68, 68, 1)',
  purple: 'rgba(221, 160, 221, 1)',
};

export const labelClasses = [
  'indigo',
  'gray',
  'green',
  'blue',
  'red',
  'purple',
];

export const getAriaLabel = (lbl) => ({
  inputProps: { 'aria-label': lbl },
});
