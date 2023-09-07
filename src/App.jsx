import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ResortDisplay from "./components/ResortDisplay";

export default function App() {
  // // api key
  // const apiKey = "57483d04";
  // // state
  const [resort, setResort] = useState(null);

  // //Function to getMovies
  // const getResort = async (searchTerm) => {
  //   try {
  //     // make fetch request and store response
  //     const response = await fetch(
  //       `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
  //     );
  //     // Parse JSON response into a javascript object
  //     const data = await response.json();
  //     //set the Movie state to the movie
  //     setResort(data);
  //     console.log(resort);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // useEffect(() => {
  //   getResort("White Chicks");
  // }, []);

  // const url = `https://ski-resort-forecast.p.rapidapi.com/${searchTerm}/forecast?units=i&el=top`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dfd428dbdcmshe06643051b38c0bp1a4bd8jsn59da54a4c468",
      "X-RapidAPI-Host": "ski-resort-forecast.p.rapidapi.com",
    },
  };
  const getResort = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://ski-resort-forecast.p.rapidapi.com/${searchTerm}/snowConditions?units=i`,
        options
      );
      const result = await response.json();
      console.log(result);
      setResort(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App container">
      <nav className="Header">
        <ul>
          <h1>
            <span className="material-symbols-outlined">React App</span>
          </h1>
        </ul>
        <ul>
          <h1>React App</h1>
        </ul>
      </nav>

      <Form resortSearch={getResort} />
      <ResortDisplay resort={resort} />
    </div>
  );
}
