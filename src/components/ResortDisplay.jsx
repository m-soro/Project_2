import { Parallax } from "react-parallax";
// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function ResortDisplay({ conditions }) {
  console.log(conditions);

  const scroll = () => {
    const section = document.querySelector("nav");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
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
            <section>
              <hgroup>
                <h1>
                  {conditions.data.name}, {conditions.data.region}
                </h1>
                <h2>{conditions.data.country}</h2>
              </hgroup>
              <section>
                <h3>Lifts</h3>
                <p>Open: {conditions.data.lifts.stats.open}</p>
                <p>Closed: {conditions.data.lifts.stats.closed}</p>
                <p>Hold: {conditions.data.lifts.stats.hold}</p>
              </section>
              <section></section>

              <span
                className="material-symbols-outlined"
                onClick={() => scroll()}
              >
                stat_3
              </span>
            </section>
          </div>
        </Parallax>
      </div>
    );
  };

  const loading = () => {
    return <h1>No Data</h1>;
  };
  console.log(conditions);

  return conditions ? loaded() : loading();
}
