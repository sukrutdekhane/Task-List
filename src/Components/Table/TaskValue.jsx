import React, { useState } from "react";
function InputTableValue() {
    const [arr, setArr] = useState([]);

    function addItem(inputValue) {

        setArr((prevValue) => {
            return [...prevValue, inputValue]
        })
    }
    const [inputValue, setInputValue] = useState({
        Task: "",
        Date: ""
    })
    function handleChange(event) {
        const newValue = event.target.value;
        const name = event.target.name;


        setInputValue((prevValue) => {
            if (name === "task") {
                return (
                    {
                        Task: newValue,
                        Date: prevValue.Date
                    }
                );
            }
            else {
                return (
                    {
                        Task: prevValue.Task,
                        Date: newValue
                    }
                );
            }
        })
    }

    function submitData() {
        addItem(inputValue);
        setInputValue({
            Task: "",
            Date: ""
        })
    }
}

export default InputTableValue