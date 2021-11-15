import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  pageSize = 9;
  // apiKey = process.env.REACT_APP_NEWS_API;

  apiKey = "355dd9a2a1da4b49935696efa443f981";
  //apiKey={this.apiKey}
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
