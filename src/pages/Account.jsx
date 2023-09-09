export default function Account() {
  return (
    <div className="Account container-fluid">
      <dialog open>
        <article>
          <header>
            <a href="#close" aria-label="Close" className="close"></a>
            <h3>Sign in</h3>
          </header>
          <form>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              required
            />
            <label htmlFor="pwd">Password:</label>
            <input type="password" id="pwd" name="pwd" minLength="8"></input>

            <button type="submit">Submit</button>
          </form>
        </article>
      </dialog>
    </div>
  );
}
