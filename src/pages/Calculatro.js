import React, { useState } from 'react'
import './calculatro.css'

const Calculatro = () => {
    const [inputValue, setInputValue] = useState('');

    function display(value) {
        setInputValue(inputValue + value)
    }

    function calculate() {
        let answers = eval(inputValue)

        setInputValue(answers);
    }

    function clear() {
        setInputValue("")
    }

  return (
    <div className='calc-col'>
        <form class="calculator" name="calc">
            <input type="text" class="value" value={inputValue} />
            <span class="num clear" onClick={() => clear()}>
                c
            </span>
            <span onClick={() => display("/")} >/</span>
            <span onClick={() => display("*")} >*</span>
            <span onClick={() => display("7")} >7</span>
            <span onClick={() => display("8")} >8</span>
            <span onClick={() => display("9")} >9</span>
            <span onClick={() => display("-")} >-</span>
            <span onClick={() => display("4")} >4</span>
            <span onClick={() => display("5")} >5</span>
            <span onClick={() => display("6")} >6</span>
            <span className="plus" onClick={() => display("+")}>
                +
            </span>
            <span onClick={() => display("1")} >1</span>
            <span onClick={() => display("2")} >2</span>
            <span onClick={() => display("3")} >3</span>
            <span onClick={() => display("0")} >0</span>
            <span onClick={() => display("00")} >00</span>
            <span  onClick={() => display(".")}>.</span>
            <span class="num equal" onClick={() => calculate()}>
                =
            </span>
        </form>
    </div>
  )
}

export default Calculatro