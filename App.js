import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";


//react element
const Heading = (
    <h1>Heading</h1>
)


//react component
const AppLayout = () =>{
    return (
        <div>
            <Body/>
          
        </div>
       
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)