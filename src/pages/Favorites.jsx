import React from "react";

export default function Favorites() {
  return (
    <div className="Favorites">
      <dialog open>
        <article className="container-fluid">
          <h3>Keep track of your favorite resorts!</h3>

          <hgroup>
            <h4>Individual Resorts</h4>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search"
            />
          </hgroup>
          <hgroup>
            <h4>By Season Pass</h4>
            <label for="SelectPass"></label>
            <select id="SelectPass" required>
              <option value="" selected>
                Season Pass
              </option>
              <option>Ikon</option>
              <option>Epic</option>
              <option>Mountain Collective</option>
            </select>
          </hgroup>

          <footer>
            <a href="#" role="button" className="outline">
              add
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
