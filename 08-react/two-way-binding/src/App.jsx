import React, { useState } from "react";

const App = () => {
  // Two way binding 

  const [title, setTitle] = useState('')

    const submitForm = (e) => {
      e.preventDefault()
      console.log('my name is',title)
      setTitle('')
    };
    return (
        <div className="container">
            <form>
                <input
                    type="text"
                    placeholder="Enter you name..."
                    style={{
                        padding: "10px",
                        marginBottom: "20px",
                        backgroundColor: "#212121",
                        border: "1px solid white",
                        color: "white",
                    }}
                    value={title}
                    onChange={(e)=>{
                      setTitle(e.target.value)
                    }}
                />
                <button
                    onClick={(e) => {
                        submitForm(e);
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default App;
