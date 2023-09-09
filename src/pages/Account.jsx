import React from "react";

export default function Account() {
  return (
    <div className="Account">
      <dialog open>
        <article className="container-fluid">
          <div className="AccountContainer ">
            <h3>Sign in</h3>
            <form action="">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                required
              />
            </form>
          </div>
          <footer>
            <a href="#" role="button" className="outline">
              sign in
            </a>
          </footer>
        </article>
      </dialog>
    </div>
  );
}
