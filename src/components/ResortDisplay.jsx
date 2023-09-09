/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";

export default function ResortDisplay({ liftStatistics, conditions }) {
  console.log(liftStatistics);
  console.log(conditions);
  const scroll = () => {
    const section = document.querySelector("nav");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getLiftStatus = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Chair</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(liftStatistics.data.lifts.status).map((key, index) => (
            <tr scope="row" key={index}>
              <td>{key}</td>
              <td>{liftStatistics.data.lifts.status[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const getLiftStatistics = () => {
    return (
      <ul>
        <li>Open: {liftStatistics.data.lifts.stats.open}</li>
        <li>Closed: {liftStatistics.data.lifts.stats.closed}</li>
        <li>Scheduled: {liftStatistics.data.lifts.stats.scheduled}</li>
        <li>Hold: {liftStatistics.data.lifts.stats.hold}</li>
      </ul>
    );
  };

  const loaded = () => {
    return (
      <div className="ResortDisplay">
        <Parallax
          bgImage="https://github.com/m-soro/Project_2/blob/main/src/assets/images/07.jpeg?raw=true"
          strength={200}
          blur={{ min: -5, max: 15 }}
        >
          <div
            className="ResortDisplayResults container"
            id="ResortDisplayResults"
          >
            <section className="ResortDetails">
              <div className="ResortHeader">
                <h2>{liftStatistics.data.name}</h2>
                <h2>{conditions.basicInfo.region.replace("-", ",")}</h2>
              </div>
              <div className="LiftStatistics">{getLiftStatistics()}</div>
            </section>
            <div className="Results">
              <section className="ChairStatus">{getLiftStatus()}</section>
              <div>
                <h1>Hello</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis, repudiandae asperiores odit magnam explicabo harum
                  commodi et velit cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis, repudiandae asperiores odit magnam explicabo harum
                  commodi et velit cumque.
                </p>
              </div>
              <div>
                <h1>Hello</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis, repudiandae asperiores odit magnam explicabo harum
                  commodi et velit cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis, repudiandae asperiores odit magnam explicabo harum
                  commodi et velit cumque.
                </p>
              </div>
            </div>

            <span
              className="material-symbols-outlined"
              onClick={() => scroll()}
            >
              stat_3
            </span>
          </div>
        </Parallax>
      </div>
    );
  };

  return liftStatistics ? loaded() : <div></div>;
}
