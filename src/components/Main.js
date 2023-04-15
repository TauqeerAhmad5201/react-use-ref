import { React, useState, useEffect, useRef } from 'react'

export default function Main() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  

  useEffect(() => {
    count.current = count.current + 1   
  })

  return (
    <>
      <h2>Enter some text</h2>
      <input type="text" value = {inputValue} onChange={(e)=> setInputValue(e.target.value)}/> 
      <h2>Render Frequency:</h2>
      <h3>{count.current}</h3>
    </>
  )
}
