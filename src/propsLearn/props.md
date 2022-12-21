what is props-props mean property that can send to parent to child component in one way

one-way mean-we can send data only parent to child
note 1 - passing properties from child to parent by this trick where passing function as props
      which accepted argument get print parent
      //parent componet code 
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
      //child component code
        return (
    <div>
      <h1>props as array from {props.arr1}</h1>
      <h1>props as properties from {props.name}</h1>
     {props.fun1("krishna")}
    </div>
  );