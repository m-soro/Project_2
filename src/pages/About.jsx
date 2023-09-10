export default function About() {
  return (
    <div className="About">
      <dialog open>
        <article className="container-fluid">
          <a href="" aria-label="Close" className="close"></a>
          <div className="AboutContainer ">
            <hgroup className="AboutText">
              <h3>Open Peaks</h3>
              <br />
              <p>
                Open Peaks is built with React. A software Engineering project
                for Per Scholas.
              </p>
              <p>Built my Mark Soro</p>
            </hgroup>
            <div className="picContainer">
              <img
                src="https://github.com/m-soro/Project_2/blob/main/src/assets/images/me.jpg?raw=true"
                alt="Mark Soro"
              />
            </div>
          </div>
          <footer>
            <a href="https://m-soro.github.io/Project_2/" role="button">
              Github
            </a>
          </footer>
        </article>
      </dialog>
    </div>
  );
}
