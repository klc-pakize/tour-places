import "./Main.scss";

import { data } from "../../helper/data";
import Card from "./Card";

const Main = () => {
  //   console.log(data);
  return (
    <div className="card-container">
      {data.map((item, index) => {
        return (
          <div className="cards">
            <Card {...item} key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Main;
