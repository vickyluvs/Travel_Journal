import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card"
import data from "./data"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App(){
    const destinationElement = data.map((item) =>{
        return <Card
        key={item.id}
        {...item}
        />
         
    })
    
   
    
    return(
        <div>
            <Nav/>
           {destinationElement}
           <Footer/>
        </div>
    )
}

export default App;