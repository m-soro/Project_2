import { useState } from "react";
import { Parallax } from "react-parallax";
// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component

export default function Form({ resortSearch }) {
  //The component must return some JSX

  //adding form's state
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // updates formdata when we type into form
  const handleChange = (e) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resortSearch(formData.searchterm);
  };

  const scroll = () => {
    const section = document.querySelector("#ResortDisplayResults");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // src/assets/images/02.jpeg
  return (
    <div className="Form">
      <Parallax
        bgImage="src/assets/images/02.jpeg"
        strength={200}
        className="darken"
      >
        <div className="FormContents">
          <form onSubmit={handleSubmit} id="SearchForm">
            <h1>Search Conditions</h1>
            <input
              type="text"
              className="TextInput"
              name="searchterm"
              onChange={handleChange}
              value={formData.searchterm}
            />
            <input
              type="submit"
              value="Submit"
              className="Submit outline"
              onClick={() => scroll()}
            />
          </form>
        </div>
      </Parallax>
    </div>
  );
}
