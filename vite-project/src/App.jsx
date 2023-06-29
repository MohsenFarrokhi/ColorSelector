import "./App.css"
import ColorSelector from "./components/ColorSelector.jsx";
import ColorStyles from "./components/ColorStyles.jsx";
import {useState} from "react";

export const App = () => {
    const [backgroundColor, setBackGroundColor] = useState("")
    const colorHandler = (e) => {
        setBackGroundColor(e.target.value);
    }
    return (
        <div className="container">
            <div>
                <ColorSelector
                    text={"Select Your Color"}
                    value={backgroundColor}
                    onChange={colorHandler}/>
            </div>
            <div className="color-box">
                <ColorStyles backgroundColor={backgroundColor}/>
            </div>
        </div>
    )
}
export default App;
