import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const ShellWrapper = lazy(() => import("./shell-wrapper"));

function App() {
  return (
    <Routes>
      <Route
        render={() => {
          return <ShellWrapper />;
        }}
      />
    </Routes>
  );
}

export default App;
