import { Parallax } from "react-parallax";

const scroll = () => {
  const section = document.querySelector("#SearchForm");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Banner() {
  return (
    <div className="Banner" id="Banner">
      <Parallax
        bgImage="https://github.com/m-soro/Project_2/blob/main/src/assets/images/05.png?raw=true"
        strength={200}
      >
        <div className="Content">
          <div className="TextContent">
            <section className="">
              <h1>Open Peaks</h1>
              <p>
                Check out skiing and snowboarding conditions all over the world!
              </p>

              <span
                className="material-symbols-outlined"
                onClick={() => scroll()}
              >
                stat_minus_3
              </span>
            </section>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
