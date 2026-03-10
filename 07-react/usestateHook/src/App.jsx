import React from "react";
import Card from "./components/Card";

const App = () => {
  // function inputField(data){
  //   console.log(data.target.value)
  // }
    return (
        <div>
            {/* <input
                type="text"
                style={{ padding: "20px", fontSize: "20px", margin: "10px" }}
                placeholder="Enter you name..."
                onChange={function inputField(data){
                  console.log(data.target.value)
                }}
            /> */}
            <Card/>
        </div>
    );
};

export default App;
