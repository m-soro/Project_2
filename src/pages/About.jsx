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
                Open Peaks is created with React using RapidAPI. More details
                about the project can be found in the GitHub Repo.
              </p>
              <p>By Mark Soro</p>
            </hgroup>
            <div className="picContainer">
              <img
                src="https://github.com/m-soro/Project_2/blob/main/src/assets/images/me.jpg?raw=true"
                alt="Mark Soro"
              />
            </div>
          </div>
          <footer>
            <a href="https://github.com/m-soro/Project_2" role="button">
              GitHub Repo
            </a>
          </footer>
        </article>
      </dialog>
    </div>
  );
}
