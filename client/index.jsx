import React from "react";
import ReactDOM from "react-dom";
import RedBox from "redbox-react";

import { AppContainer } from "./app-container";
import { App } from "./app";

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root"),
  );
};


// Catch Errors
try {
  render(App);
} catch (e) {
  const Redbox = <RedBox error={e} />
  render(RedBox);
}

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./app", () => render(App));
}