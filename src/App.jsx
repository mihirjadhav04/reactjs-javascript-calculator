import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");

  const handleNumberClick = (num) => {
    if (display === "0" || display === "Error") {
      setDisplay(num);
      setExpression(num);
    } 
    else {
      // console.log("DISPLAY: ", display);
      // console.log("NUMBER: ", num);
      // console.log("EXPRESSION: ", expression);
      if (expression.endsWith("+") || expression.endsWith("-") || expression.endsWith("*") || expression.endsWith("/")){
        setDisplay(num)
      }
      else{
        setDisplay( prevNumber => prevNumber + num);
      }

      setExpression(prevExpression => prevExpression + num);
      // console.log("AFTER DISPLAY :", display);
      // console.log("AFTER EXPRESSION:", expression);
    }
  };

  const handleOperatorClick = (operator) => {
    // console.log("handleOperatorClick operator: ", operator);
    // console.log("handleOperatorClick expression: ", expression);
    if (expression.endsWith("+") || expression.endsWith("-") || expression.endsWith("*") || expression.endsWith("/")) {
      // Replace the last operator with the new one
      // print("HERE!")
      setExpression(expression + operator);
    } else {
      setExpression(expression + operator);
      console.log(operator);
      setDisplay(operator)
      console.log(display);
    }
  };

  const handleDecimalClick = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleEqualsClick = (operator) => {
    let result;
    try {
      console.log("expression:", expression);
      console.log("display:", display);
      result = eval(expression).toString();
      if (result === "Infinity" || result === "-Infinity" || isNaN(result)) {
        throw new Error("Error");
      }
      setExpression(expression + operator + result);
      setDisplay(result);
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleClearClick = () => {
    setDisplay("0");
    setExpression("");
  };

  return (
    <>
      <div className="calculator">
        <div id="small-display" className="small-display">
          {expression}
        </div>
        <div id="display" className="display">
          {display}
        </div>
        <button id="clear" onClick={handleClearClick}>
          AC
        </button>
        <button id="divide" onClick={() => handleOperatorClick("/")}>
          /
        </button>
        <button id="multiply" onClick={() => handleOperatorClick("*")}>
          *
        </button>
        <button id="seven" onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button id="eight" onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button id="nine" onClick={() => handleNumberClick("9")}>
          9
        </button>
        <button id="subtract" onClick={() => handleOperatorClick("-")}>
          -
        </button>
        <button id="four" onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button id="five" onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button id="six" onClick={() => handleNumberClick("6")}>
          6
        </button>
        <button id="add" onClick={() => handleOperatorClick("+")}>
          +
        </button>
        <button id="one" onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button id="two" onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button id="three" onClick={() => handleNumberClick("3")}>
          3
        </button>
        <button id="equals" onClick={() => handleEqualsClick("=")}>
          =
        </button>
        <button id="zero" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button id="decimal" onClick={handleDecimalClick}>
          .
        </button>
      </div>
      <div className="footer">
        <h6 className="footer-text">designed & coded by </h6>
        <h4 className="name">Mihir Jadhav</h4>
      </div>
    </>
   
  );
};

export default Calculator;
