import moment from 'moment';

export const months = moment.monthsShort();

export const weekDays = moment.weekdaysShort();

export const getCircularMonth = (month: number) =>
  ((month % months.length) + months.length) % months.length;

export const getDaysOfMonth = (month: number, year: number) => {
  const nDays = moment(`${year}-${month + 1}`).daysInMonth();
  return Array.from({ length: nDays }, (_, i) => {
    return { day: i + 1, month, year };
  });
};
