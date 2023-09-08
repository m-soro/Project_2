import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ResortDisplay from "./components/ResortDisplay";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

export default function App() {
  const [conditions, setConditions] = useState(null);

  useEffect(() => {
    getConditions("sunvalley");
  }, []);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dfd428dbdcmshe06643051b38c0bp1a4bd8jsn59da54a4c468",
      "X-RapidAPI-Host": "ski-resorts-and-conditions.p.rapidapi.com",
    },
  };

  const getConditions = async (searchTerm) => {
    const url = `https://ski-resorts-and-conditions.p.rapidapi.com/v1/resort/${searchTerm}`;
    try {
      const respConditions = await fetch(url, options);

      const resultConditions = await respConditions.json();
      setConditions(resultConditions);
      console.log(conditions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Form resortSearch={getConditions} />
      <ResortDisplay conditions={conditions} />
    </div>
  );
}
