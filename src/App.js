import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 9;
  // apiKey = process.env.REACT_APP_NEWS_API;

  const apiKey = "a049d52638dc4181b6702e82eba710dc";
  // const apiKey = "355dd9a2a1da4b49935696efa443f981";
  //apiKey={apiKey}
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <NavBar />
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="GB"
                category="general"
              />
            }
          />
          <Route
            path="business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="GB"
                category="business"
              />
            }
          />
          <Route
            path="entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="GB"
                category="entertainment"
              />
            }
          />
          <Route
            path="general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="GB"
                category="general"
              />
            }
          />
          <Route
            path="health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="GB"
                category="health"
              />
            }
          />
          <Route
            path="science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="GB"
                category="science"
              />
            }
          />
          <Route
            path="sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="GB"
                category="sports"
              />
            }
          />
          <Route
            path="technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="GB"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};
export default App;
