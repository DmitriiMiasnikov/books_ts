import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Books from "./components/pages/Books";

import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path={"/home"} render={() => <Home />} />
          <Route path={"/dashboard"} render={() => <Dashboard />} />
          <Route path={"/books"} render={() => <Books />} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
