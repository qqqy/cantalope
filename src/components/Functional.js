import React from "react";

export default function(){

  function showMe(){
    console.log("Hey, I'm a function in a function!")
  }
  showMe();
  
  return (
    <h1>Me Me Big Boy!</h1>
  )
}