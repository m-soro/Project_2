export default function About() {
  return (
    <div className="About">
      <dialog open>
        <article className="container-fluid">
          <div className="AboutContainer ">
            <hgroup className="AboutText">
              <h3>Open Peaks</h3>
              <br />
              <p>
                Open Peaks is created with React. It is a project for Per
                Scholas Software Engineering Track.
              </p>
            </hgroup>
            <div className="picContainer">
              <img src="src/assets/images/me.jpg" alt="Mark Soro" />
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
            <a href="#" role="button" className="outline">
              close
            </a>
          </footer>
        </article>
      </dialog>
    </div>
  );
}
