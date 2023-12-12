import { useState } from "react";
import Locations from "./components/locations";
import Cabinents from "./components/cabinents";
import CheckPasswordModal from "./components/check-password-modal";
import { ThemeContextProvider } from "./context/themeContext";
import AppProvider from "./AppProvider";
import Toaster from "./components/base/toaster";

function App() {
  const [show, setShow] = useState("LOCATIONS");
  const [seLectedLocation, setSeLectedLocation] = useState(1);
  const [checkPasswordModal, setCheckPasswordModal] = useState(false);
  const [selectedCabinent, setSelectedCabinent] = useState(0);

  const toggleCheckPasswordModal = () => {
    setCheckPasswordModal(!checkPasswordModal);
  };

  const onLocationClick = (id) => {
    if (id !== 0) {
      setShow("CABINENTS");
    } else {
      setShow("LOCATIONS");
    }
    setSeLectedLocation(id);
  };

  const onCabinentClick = (id) => {
    setSelectedCabinent(id);
    setCheckPasswordModal(true);
  };

  return (
    <div className="App">
      <AppProvider>
        <ThemeContextProvider>
          <Locations
            show={show === "LOCATIONS"}
            onLocationClick={onLocationClick}
          />
          <Cabinents
            show={show === "CABINENTS"}
            onBackClick={onLocationClick}
            seLectedLocation={seLectedLocation}
            onCabinentClick={onCabinentClick}
          />
          <CheckPasswordModal
            toggleCheckPasswordModal={toggleCheckPasswordModal}
            checkPasswordModal={checkPasswordModal}
            selectedCabinent={selectedCabinent}
            seLectedLocation={seLectedLocation}
          />
          <Toaster />
        </ThemeContextProvider>
      </AppProvider>
    </div>
  );
}

export default App;
