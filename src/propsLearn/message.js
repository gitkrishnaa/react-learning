import React from "react";



export default function App(props) {
// note-props is just a argument so you can write any word
// props act as object where data is property of that object so can be accesed by dot notation
// you can pass anything as props like function,object,properties,array

//advice->if you want to see all data persent in props then just console.log(props)
//advice-> dont use double component in parent component with diffrent prosps then it 
// not work as you expected so use child component with all proprety incuded in each same 
//child componet
//eample- it not work /it rended the component twice of one component
{/* <Message name="krishna"/> 
<Message arr1={[4,5,6,7]}/>
//example- it work fine
<Message arr1={[4,5,6,7]} name="krishna" />
<Message arr1={[4,5,6,7]} name="krishna" />
*/}

  // 
// 

console.log(props)
  return (
    <div>
      <h1>props as array from {props.arr1}</h1>
      <h1>props as properties from {props.name}</h1>
     {props.fun1("kumar")}
    </div>
  );
}
