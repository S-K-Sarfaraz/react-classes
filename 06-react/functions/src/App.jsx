import React from "react";

const App = () => {
    function clicked() {
        console.log("button is clicked!");
    }
    // function input(data) {
    //     console.log("Input is entered!", data);
    // }

    // function entered(){
    //   console.log('box ke ander mouse hai')
    // }
    return (
        <div>
            <button onClick={clicked}>Click me</button>
            <div
                onMouseEnter={function entered() {
                    console.log("sakib");
                }}
                className="box"
                onMouseLeave={function leaved() {
                    console.log("hum bahar aa haye hain!!");
                }}
            ></div>
            <input
                onChange={function input(data){
                  console.log(data.target.value)
                }}
                type="text"
                placeholder="Enter you name.."
                style={{ padding: "10px", fontSize: "20px" }}
            />
        </div>
    );
};

export default App;
