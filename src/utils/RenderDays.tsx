import { firstLetterToUpperCase } from "./FirstLetterToUpperCase";

const spanStyle = {
  fontWeight: 400,
  fontSize: 12,
  color: "rgba(149, 148, 148, 1)",
};

export const renderDays = (startDay: string) => {
  const daysOfWeek = [];

  for (let i = 1; i <= 7; i++) {
    const date = new Date(2022, 1, i);
    const formatter = new Intl.DateTimeFormat("ru-RU", { weekday: "short" });
    const shortDayName = formatter.format(date);
    daysOfWeek.push(shortDayName);
  }

  const index = daysOfWeek.findIndex(
    (day) => day.toLowerCase() === startDay.toLowerCase()
  );
  const result: JSX.Element[] = [
    ...daysOfWeek.slice(index),
    ...daysOfWeek.slice(0, index),
  ].map((el) => <span style={spanStyle}>{firstLetterToUpperCase(el)}</span>);
  return result;
};
