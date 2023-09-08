import { Parallax } from "react-parallax";

import "animate.css/animate.css"; // you need to require the css somewhere

const scroll = () => {
  const section = document.querySelector("#SearchForm");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Banner() {
  return (
    <div className="Banner" id="Banner">
      <Parallax bgImage="src/assets/images/05.png" strength={200}>
        <div className="Content">
          <div className="TextContent">
            <section className="">
              <h1>Open Peaks</h1>
              <p>Check snow and mountain operations all over the world!</p>

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
