import { Parallax } from "react-parallax";
// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function ResortDisplay({ conditions }) {
  // console.log(conditions);

  // function to return loaded JSX

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
          <div className="ResortDisplayResults" id="ResortDisplayResults">
            <section>
              <h1>Open Peaks</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>
                Esse, ex explicabo error cupiditate non ut est nemo inventore
              </p>
              <p>
                numquam rerum eligendi quod ea, vero repellat quibusdam sequi
                minus id labore!
              </p>
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

  return conditions ? loaded() : loading();
}
