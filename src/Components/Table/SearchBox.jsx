import React, { useState } from "react";
import Input from "../Input"

function SearchBox(props) {
    const [inputText, setInputText] = useState("");
    function searchText() {
        console.log(props.filterTask(inputText));
        props.filterTask(inputText);
        setInputText("");
    }

    function catchInput(event) {
        setInputText(event.target.value);
    }
    return <div className="search_box"><Input onChange={catchInput} type="text" placeholder="search" value={inputText} />
        <button onClick={searchText} className="search_button">search</button></div>
}

export default SearchBox