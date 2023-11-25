import { useEffect, useState } from "react";
import s from "./ContributionGraph.module.scss";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import { ContributionsTypes } from "../../types/Contributions";
import { GraphRender } from "../GraphRender/GraphRender";
import { CellsInfo } from "../CellsInfo/CellsInfo";

const ContributionGraph = () => {
  const [contributions, setContributions] = useState<ContributionsTypes>({});

  useEffect(() => {
    axios
      .get<ContributionsTypes>(BASE_URL)
      .then((response) => setContributions(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={s.container}>
      {GraphRender({ contributions })}
      <CellsInfo />
    </div>
  );
};

export { ContributionGraph };
