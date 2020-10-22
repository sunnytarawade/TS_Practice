import React from "react";
import Dashboard, { ExtraUserDetails } from "./components/Dashboard/index";
import styled from "styled-components";
import GlobalStyles from './styles/GlobalStyles'

const AppContainer = styled.div`
  min-height : 100vh;
  text-align: center;
  background-color: lightyellow;
`;

function App(): JSX.Element {
  const propsObject: ExtraUserDetails = {
    userName: "Sunny",
    userId: 123,
    activeStatus: true,
  };

  return (
    <div className="App">
      <AppContainer>
        <Dashboard {...propsObject} />
      </AppContainer>

      <GlobalStyles />
    </div>
  );
}

export default App;
