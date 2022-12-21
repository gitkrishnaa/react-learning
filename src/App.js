import React from "react";
import "./style.css";
import Message from './propsLearn/message';
export default function App() {
  return (
    <div>
         <Message arr1={[4,5,6,7]} name="krishna" obj1={{name:"krishna",home:"kml",}} 
         fun1={(a)=>{
           
        return(
          <div>
        
          <h1>this is function parameter {a}</h1>
        
                 </div>
        )
       }}
         />


  
    </div>
  );
}
