import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BottomAppBar from "./components/BottomAppBar";
import Home from "./pages/Home";
import TradeAppBar from "./pages/Home/TradeDetail/TradeAppBar";
import TradeDetail from "./pages/Home/TradeDetail";
import Chatt from "./pages/chat";
const App = (): JSX.Element => {
  return (
    <main>
      <TradeDetail />
    </main>
  );
};

export default App;
