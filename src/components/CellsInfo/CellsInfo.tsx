import { CellRender } from "../CellRender/CellRender";
import s from "./CellsInfo.module.scss";

const CellsInfo = () => {
  return (
    <div className={s.info}>
      <span>Меньше</span>
      <div className={s.cells}>
        <CellRender dateString="" contributions={0} />
        <CellRender dateString="" contributions={1} />
        <CellRender dateString="" contributions={10} />
        <CellRender dateString="" contributions={20} />
        <CellRender dateString="" contributions={35} />
      </div>
      <span>Больше</span>
    </div>
  );
};

export { CellsInfo };
