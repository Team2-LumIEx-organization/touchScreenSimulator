import { useState } from "react";

import { ThemeContextProvider } from "./context/themeContext";
import AppProvider from "./AppProvider";
import Toaster from "./components/base/toaster";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <ThemeContextProvider>
          <Toaster />
        </ThemeContextProvider>
      </AppProvider>
    </div>
  );
}

export default App;
