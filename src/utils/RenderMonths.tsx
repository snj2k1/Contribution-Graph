import { firstLetterToUpperCase } from "./FirstLetterToUpperCase";

const spanStyle = {
  fontWeight: 400,
  fontSize: 12,
  color: "rgba(149, 148, 148, 1)",
};

export const renderMonths = (startMonth: string): JSX.Element[] => {
  const allMonths = [];

  for (let i = 1; i <= 12; i++) {
    const date = new Date(2022, i, 1);
    const formatter = new Intl.DateTimeFormat("ru-RU", { month: "short" });
    const shortMonthName = formatter.format(date);
    allMonths.push(shortMonthName);
  }

  const index = allMonths.findIndex(
    (month) => month.toLowerCase() === startMonth.toLowerCase()
  );
  const result: JSX.Element[] = [
    ...allMonths.slice(index),
    ...allMonths.slice(0, index),
  ].map((el) => <span style={spanStyle}>{firstLetterToUpperCase(el)}</span>);
  return result;
};
