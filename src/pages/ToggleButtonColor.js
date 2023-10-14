import React, { useState } from 'react'

const ToggleButtonColor = () => {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [txtColor, setTxtColor] = useState("#000");
    const [btnColor, setBtnColor] = useState("white");

    function handleClick() {
        setBackgroundColor(backgroundColor === 'white' ? '#000' : 'white');
        setTxtColor(txtColor === "#000" ? "#ffa31a" : "#000");
        setBtnColor(backgroundColor === "white" ? "#000" : "white")
    }

  return (
  
        <section style={{backgroundColor, color: txtColor}}>
            <button onClick={handleClick} style={{btnColor, color: txtColor, border:`2px solid ${txtColor}`}}>White Theme</button>

            <section className='content'> 
                <h1>Basic theme content here, which for test purpose to check <br /> the theme background and content color.</h1>
            </section>
        </section>
  )
}

export default ToggleButtonColor