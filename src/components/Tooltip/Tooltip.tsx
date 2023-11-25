import { formatDate } from "../../utils/FormatDate";
import s from "./Tooltip.module.scss";

const Tooltip = ({
  isSelected,
  date,
  contributions,
}: {
  isSelected: boolean;
  date: string;
  contributions: number;
}) => {
  const classes = isSelected ? s.tooltip + " " + s.active : s.tooltip;
  return (
    <div className={classes}>
      <span className={s.contributions}>{`${
        contributions ? (contributions >= 30 ? "+30" : contributions) : "No"
      } contributions`}</span>
      {date && <span className={s.date}>{formatDate(date)}</span>}
    </div>
  );
};

export { Tooltip };
