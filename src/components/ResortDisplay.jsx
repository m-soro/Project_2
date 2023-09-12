/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";

export default function ResortDisplay({ liftStatistics, conditions }) {
  const scroll = () => {
    const section = document.querySelector("nav");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getLiftStatus = () => {
    return liftStatistics !== null &&
      Object.keys(liftStatistics.data.lifts.status).length !== 0 ? (
      <article>
        <h4>Chair Status</h4>
        <p></p>
        <table>
          <thead></thead>
          <tbody>
            {Object.keys(liftStatistics.data.lifts.status).map((key, index) => (
              <tr scope="row" key={index}>
                <td>{key}</td>
                {liftStatistics.data.lifts.status[key] === "closed" ? (
                  <td style={{ color: "#fd5959" }}>
                    {liftStatistics.data.lifts.status[key]}
                  </td>
                ) : liftStatistics.data.lifts.status[key] === "scheduled" ? (
                  <td style={{ color: "#ff894c" }}>
                    {liftStatistics.data.lifts.status[key]}
                  </td>
                ) : liftStatistics.data.lifts.status[key] === "open" ? (
                  <td style={{ color: "#00204a" }}>
                    {liftStatistics.data.lifts.status[key]}
                  </td>
                ) : (
                  <td>{liftStatistics.data.lifts.status[key]}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    ) : (
      " "
    );
  };

  const displayForecast = () => {
    return conditions.forecast5Day.map((each) => {
      return Object.keys(each).map((key, index) => {
        if (key === "dayOfWeek") {
          return (
            <article>
              <summary key={index} className="EachDay">
                {each[key]}
              </summary>
              {Object.keys(each).map((key) => {
                if (key !== "dayOfWeek") {
                  return (
                    <details>
                      <summary>{key}</summary>
                      <table>
                        <tbody>
                          {Object.keys(each[key]).map((attribute, index) => (
                            <tr key={index}>
                              <td>{attribute}</td>
                              <td>{each[key][attribute]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </details>
                  );
                }
              })}
            </article>
          );
        }
      });
    });
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

  const getSnowTotals = () => {
    let snowTotalKeys = [
      "Base",
      "Season",
      "12 hours",
      "24 hours",
      "48 hours",
      "7 days",
    ];
    return Object.keys(liftStatistics.data.conditions).map((key, index) => {
      return (
        <ul key={index}>
          <li>{snowTotalKeys[index]}</li>
          <li>: {liftStatistics.data.conditions[key]} in.</li>
        </ul>
      );
    });
  };

  const loading = () => {
    console.log("loading");
    return (
      <div>
        <article aria-busy="true">loading</article>
      </div>
    );
  };

  const statsMessage = () => {
    return liftStatistics === null ||
      Object.keys(liftStatistics.data.lifts.status).length === 0 ? (
      <p>Lift information and snow totals are not available.</p>
    ) : (
      <p></p>
    );
  };

  const loaded = () => {
    return (
      <div className="ResortDisplay" id="ResortDisplayResults">
        <Parallax
          bgImage="https://github.com/m-soro/Project_2/blob/main/src/assets/images/07.jpeg?raw=true"
          strength={200}
          blur={{ min: -10, max: 15 }}
        >
          <div className="ResortDisplayResults">
            <section className="ResortDetails container">
              <article className="ResortHeader">
                <h3>{conditions.basicInfo.name}</h3>
                <h4>{conditions.basicInfo.region.split("-")[1]}</h4>
                <h4>{conditions.basicInfo.region.split("-")[0]}</h4>
              </article>
              <div className="StatsMessage">{statsMessage()}</div>
              <div>
                {liftStatistics !== null &&
                Object.keys(liftStatistics.data.lifts.status).length !== 0 ? (
                  <article className="LiftStatistics">
                    {getLiftStatistics()}
                  </article>
                ) : (
                  <div></div>
                )}
              </div>

              <div>
                {liftStatistics !== null &&
                Object.keys(liftStatistics.data.lifts.status).length !== 0 &&
                liftStatistics.data.conditions !== undefined ? (
                  <article className="SnowTotals">{getSnowTotals()}</article>
                ) : (
                  <div></div>
                )}
              </div>
            </section>
            <div className="Results">
              <hgroup className="ChairStatus">
                {liftStatistics !== null ? getLiftStatus() : <div></div>}
              </hgroup>
              <hgroup className="ForecastBox">
                <h4>Resort 5 Day Forecast</h4>

                {conditions !== null ? (
                  <section className="ForecastContainer">
                    {displayForecast()}
                  </section>
                ) : (
                  <div></div>
                )}
              </hgroup>
            </div>
            <div className="BackToTopDiv">
              <span
                className="material-symbols-outlined vert-move"
                onClick={() => scroll()}
              >
                stat_3
              </span>
            </div>
            <div className="Notice container-fluid">
              <p>there is no guarantee that external data is 100% accurate.</p>
            </div>
          </div>
        </Parallax>
      </div>
    );
  };

  console.log(
    liftStatistics !== null
      ? Object.keys(liftStatistics.data.lifts.status).length === 0
      : "no lift statistics available"
  );
  console.log("Error getting Ski Conditions?", conditions === null);
  console.log("Error getting liftstatistics?", liftStatistics === null);
  console.log(conditions);
  console.log(liftStatistics);

  return conditions || liftStatistics ? loaded() : loading();
}
