import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import View from "./components/View";
import "./styles.css";

const apiConfig = {
  method: "GET",
  headers: new Headers()
};

const apiRootUrl =
  "https://my-json-server.typicode.com/Utopiad/spectraltms-front-end-test";

export default function App() {
  const [zones, setZones] = useState(null);
  const [scenarios, setScenarios] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [focus, setFocus] = useState({});

  const getZones = async () => {
    await fetch(`${apiRootUrl}/zones`, apiConfig)
      .then((response) => response.json())
      .then((data) => {
        setZones(data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getScenarios = async () => {
    await fetch(`${apiRootUrl}/scenarios`, apiConfig)
      .then((response) => response.json())
      .then((data) => {
        setScenarios(data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (!zones?.length && !scenarios?.length && !isFetching) {
      setIsFetching(true);
      getZones();
      getScenarios();
    }
  });

  return (
    <div className="App">
      <h1>Spectral TMS</h1>
      <h2>Front-end development technical test</h2>
      <p>Let's build a simple view with a breadcrumb!</p>

      <main>
        <NavBar
          zones={zones}
          scenarios={scenarios}
          setFocus={(focus) => setFocus(focus)}
        />
        <View focus={focus} />
      </main>
    </div>
  );
}
