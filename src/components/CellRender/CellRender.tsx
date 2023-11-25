import { useState } from "react";
import { constructColor } from "../../utils/ConstructColor";
import { Tooltip } from "../Tooltip/Tooltip";
import s from "./CellRender.module.scss";

type CellProps = {
  dateString: string;
  contributions: number;
};

export const CellRender = ({ dateString, contributions }: CellProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const color = constructColor(contributions);

  return (
    <div
      style={color}
      className={s.cell}
      onClick={() => setIsSelected(!isSelected)}
      onBlur={() => setIsSelected(false)}
      tabIndex={0}
    >
      <Tooltip
        isSelected={isSelected}
        date={dateString}
        contributions={contributions}
      />
    </div>
  );
};
