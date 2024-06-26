import "./App.css";
import MenuBurger from "./MenuBurger.tsx";
import CustomButton from "./assets/CustomButton.tsx";
import {FaBandAid} from "react-icons/fa";

function App() {

  return (
    <>
        <CustomButton
            icon={FaBandAid}
            text="Pansements"
            badgeContent={2}
            borderColor={"blue.main"}
        />
        <CustomButton
            icon={FaBandAid}
            bgColor={"alert"}
            iconColor={"white"}
        />
        <MenuBurger />
    </>
  );
}

export default App;
