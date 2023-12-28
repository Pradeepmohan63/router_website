import React from 'react'
// import { useSearchParams } from 'react-router-dom';
import { useState, useContext,createContext } from 'react';

const context = createContext();

function Bannernext(){
  const [name,setname] = useState("Dinesh kumar"); 
  return (
    <context.Provider value={{name}}>
       <ChildA/>
    </context.Provider>
  )
}

function ChildA(){
  return(
    <div>
      <h1>Hi I am a Child A</h1>
      <ChildB />
    </div>
  )
}

function ChildB(){
  const {name} =  useContext(context)
  return(
    <div>
      <h1>Hi I am a Child B</h1>
      <h3>{name}</h3>
    </div>
  )
}

export default Bannernext