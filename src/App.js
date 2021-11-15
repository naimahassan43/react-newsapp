import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
export default class App extends Component {
  pageSize = 9;
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
                  country="GB"
                  category="entertainment"
                />
              }
            />
            <Route
              path="general"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country="GB"
                  category="general"
                />
              }
            />
            <Route
              path="health"
              element={
                <News
                  key="health"
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
