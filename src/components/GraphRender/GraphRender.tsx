import { ContributionsTypes } from "../../types/Contributions";
import { renderDays } from "../../utils/RenderDays";
import { renderMonths } from "../../utils/RenderMonths";
import { CellRender } from "../CellRender/CellRender";
import s from "./GraphRender.module.scss";

export const GraphRender = ({
  contributions,
}: {
  contributions: ContributionsTypes;
}) => {
  const graph: JSX.Element[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 355);

  console.log();

  for (let j = 0; j < 7; j++) {
    for (let i = 1; i <= 51; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + (i - 1) * 7 + j);
      const dateString = currentDate.toISOString().split("T")[0];
      const hasContributions = contributions[dateString];

      graph.push(
        <CellRender
          key={`${i}-${j}`}
          dateString={dateString}
          contributions={hasContributions}
        />
      );
    }
  }

  return (
    <>
      <div className={s.months}>
        {renderMonths(
          new Intl.DateTimeFormat("ru-RU", { month: "short" }).format(startDate)
        )}
      </div>
      <div className={s.days}>
        {renderDays(
          new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(
            new Date(startDate.toISOString().split("T")[0])
          )
        )}
      </div>
      <div className={s.graph}>{graph}</div>
    </>
  );
};
