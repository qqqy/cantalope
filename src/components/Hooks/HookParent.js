import React, { useState , useEffect } from 'react';

function HookParent(){

  const [count, setCount] = useState(0);
  const [favorite , setFavorite] = useState("Panda")

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
      Click me
      </button>
      <p>My favorite Animal is {favorite}</p>
      <input onChange={(e) => setFavorite(e.target.value)}/>
    </div>
  );
}
export default HookParent
