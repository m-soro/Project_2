export default function About() {
  return (
    <div className="About">
      <dialog open>
        <article className="container-fluid">
          <a href="#close" aria-label="Close" className="close"></a>
          <div className="AboutContainer ">
            <hgroup className="AboutText">
              <h3>Open Peaks</h3>
              <br />
              <p style={{ fontSize: "smaller" }}>
                Open Peaks is built with React. It is a project for Per Scholas
                Software Engineering Track.
              </p>
            </hgroup>
            <div className="picContainer">
              <img
                src="https://github.com/m-soro/Project_2/blob/main/src/assets/images/me.jpg?raw=true"
                alt="Mark Soro"
              />
            </div>
          </div>
          <footer>
            <a
              href="https://m-soro.github.io/Project_2/"
              role="button"
              className="outline"
            >
              Github
            </a>
          </footer>
        </article>
      </dialog>
    </div>
  );
}
