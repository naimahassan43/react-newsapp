import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  pageSize={6}
                  country="GB"
                  category="general"
                />
              }
            />
            <Route
              path="business"
              element={
                <News
                  key="business"
                  pageSize={6}
                  country="GB"
                  category="business"
                />
              }
            />
            <Route
              path="entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={6}
                  country="GB"
                  category="entertainment"
                />
              }
            />
            <Route
              path="health"
              element={
                <News
                  key="health"
                  pageSize={6}
                  country="GB"
                  category="health"
                />
              }
            />
            <Route
              path="science"
              element={
                <News
                  key="science"
                  pageSize={6}
                  country="GB"
                  category="science"
                />
              }
            />
            <Route
              path="sports"
              element={
                <News
                  key="sports"
                  pageSize={6}
                  country="GB"
                  category="sports"
                />
              }
            />
            <Route
              path="technology"
              element={
                <News
                  key="technology"
                  pageSize={6}
                  country="GB"
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}
