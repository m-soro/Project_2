export default function Favorites() {
  return (
    <div className="Favorites">
      <dialog open className="container">
        <article>
          <header>
            <a href="" aria-label="Close" className="close"></a>
          </header>

          <h4>Keep track of your favorite resorts!</h4>
          <div>
            <h4>Individual Resorts</h4>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search"
            />
          </div>
          <div>
            <h4>By Season Pass</h4>
            <label htmlFor="SelectPass"></label>
            <select id="SelectPass" required>
              <option value="" selected>
                Season Pass
              </option>
              <option>Ikon</option>
              <option>Epic</option>
              <option>Mountain Collective</option>
            </select>
          </div>

          <footer>
            <a href="#" role="button">
              add
            </a>
          </footer>
        </article>
      </dialog>
    </div>
  );
}
