import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ResortDisplay from "./components/ResortDisplay";
import Banner from "./components/Banner";

export default function App() {
  const [liftStatistics, setLiftStatistics] = useState(null);
  const [conditions, setConditions] = useState(null);

  useEffect(() => {
    getStatistics("whistler-blackcomb");
    getConditions("whistler-blackcomb");
  }, []);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "ski-resorts-and-conditions.p.rapidapi.com",
    },
  };

  const getStatistics = async (searchTerm) => {
    const url = `https://ski-resorts-and-conditions.p.rapidapi.com/v1/resort/${searchTerm}`;
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const statistics = await response.json();
        setLiftStatistics(statistics);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const opts = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "ski-resort-forecast.p.rapidapi.com",
    },
  };

  const getConditions = async (searchTerm) => {
    const url = `https://ski-resort-forecast.p.rapidapi.com/${searchTerm}/forecast?units=i&el=top`;
    try {
      const response = await fetch(url, opts);
      if (response.ok) {
        const conditions = await response.json();
        setConditions(conditions);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Banner />
      <Form getStatistics={getStatistics} getConditions={getConditions} />
      <ResortDisplay liftStatistics={liftStatistics} conditions={conditions} />
    </div>
  );
}
