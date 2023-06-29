import Color from "./Color";
const ColorSelector = ({ text, value, onChange }) => {
    return (
        <select value={value} onChange={onChange}>
            <option>{text}</option>
            <Color colorName={'Red'} value={'red'}/>
            <Color colorName={'Green'} value={'green'}/>
            <Color colorName={'Blue'} value={'blue'}/>
            <Color colorName={'Yellow'} value={'yellow'}/>
        </select>
    );
};

export default ColorSelector;
