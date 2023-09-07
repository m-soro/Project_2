import { useState } from "react";
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
    // props.moviesearch(formData.searchterm);
    resortSearch(formData.searchterm);
  };

  return (
    <div className="container">
      <h1>Search Conditions</h1>
      <form onSubmit={handleSubmit} className="container">
        <input
          type="text"
          className="TextInput"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="Submit" className="Submit outline" />
      </form>
    </div>
  );
}
