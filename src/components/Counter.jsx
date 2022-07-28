import Parser from "html-react-parser";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

export default function Counter() {
  const [count, setCount] = useState(0);
  const cardValues = [30, 33, 98, 10];
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleIncrementByNum = () => {
    const inc = document.querySelector("#increment_by");
    if (inc.value) setCount(count + parseInt(inc.value));
  };
  const handleDecrementByNum = () => {
    const dec = document.querySelector("#decrement_by");
    if (dec.value) setCount(count - parseInt(dec.value));
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  const [pickedNumber, setPickedNumber] = useState(null);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 m-auto">
            <div
              className="card text-white bg-secondary mb-3"
              style={{ width: "22rem", margin: "auto" }}
            >
              <div className="card-body text-center">
                <h5 className="card-title">Counter App</h5>
                <p className="card-text">Click Below Links to see the magic</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-center">
                  <button onClick={handleIncrement} className="btn btn-primary">
                    Increment By 1
                  </button>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <div className="input-group">
                    <span className="input-group-text">Increment by</span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="3"
                      id="increment_by"
                    />
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      id="button-addon2"
                      onClick={handleIncrementByNum}
                    >
                      <IoIosAddCircle />
                    </button>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <button onClick={handleDecrement} className="btn btn-danger">
                    Decrement By 1
                  </button>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <div className="input-group">
                    <span className="input-group-text">Decrement by</span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="5"
                      id="decrement_by"
                    />
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      id="button-addon2"
                      onClick={handleDecrementByNum}
                    >
                      <IoIosRemoveCircle />
                    </button>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <button onClick={handleReset} className="btn btn-success">
                    Reset
                  </button>
                </li>
              </ul>
              <div className="card-body d-flex justify-content-center">
                <p className="card-text">Count Value : {count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-8 m-auto">
            <div
              className="card text-white bg-dark mb-3"
              style={{ width: "22rem", margin: "auto" }}
            >
              <IsOddOrEven pickedNumber={pickedNumber} />
              <RandomCards
                cardValues={cardValues}
                setPickedNumber={setPickedNumber}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 m-auto">
            <h3 className="text-center mb-3">Keynotes of Last Class</h3>
            <ClassNotes />
          </div>
        </div>
      </div>
    </>
  );
}

function IsOddOrEven({ pickedNumber }) {
  return (
    <>
      <div className="card-body text-center">
        {!pickedNumber && (
          <p className="card-text">No Number is Selected Yet</p>
        )}
        {pickedNumber && (
          <p className="card-text">
            Selected Number: {pickedNumber} is{" "}
            {pickedNumber % 2 == 0 ? (
              <b className="text-success">Even</b>
            ) : (
              <b className="text-warning">Odd</b>
            )}
          </p>
        )}
      </div>
    </>
  );
}

function RandomCards({ cardValues, setPickedNumber }) {
  return (
    <>
      <div className="card-body">
        <p className="d-flex justify-content-center">
          {cardValues.map((cardValue, index) => (
            <span
              className="badge rounded-pill bg-primary me-2"
              style={{ fontSize: "2rem", borderRadius: "50%" }}
              key={index}
              onClick={() => setPickedNumber(cardValue)}
            >
              {cardValue}
            </span>
          ))}
        </p>
      </div>
    </>
  );
}

function ClassNotes() {
  const data = [
    {
      question: "What is JSX",
      answer: `<ul>
        <li>JSX stands for JavaScript XML</li>
        <li>JSX allows us to write HTML in React</li>
        <li>
          It is faster than normal js as it performs optimizations while
          translating to regular JavaScript.
        </li>
      </ul>`,
    },
    {
      question: "What are the rules to remember while writing JSX",
      answer: `<ul>
        <li>Return One top-level element from a given component, if you don’t know what to use, use fragment (<> </>)</li>
        <li>Use curly braces to inject variables i.e. {variable}</li>
        <li>OPEN or a CLOSED tag whatever it is, we must ensure to CLOSE that.</li>
        <li>Should not use “class”, instead, we should use “className” for using CSS 'class' attribute</li>
        <li>Should not use “for”, instead, we should use “htmlFor” for using 'for' attribute in input tag</li>
        <li>Must use the first letter capital when naming a component</li>
      </ul>`,
    },
    {
      question: "What are the ways of using CSS in React Applications",
      answer: `<ul>
        <li>Inline CSS (must have used object syntax where a css selector will be treat)</li>
        <li>External CSS (Plain CSS which need to import from different file)</li>
        <li>CSS Modules (Plain CSS which need to import from different file, but in this case the name should ‘customCSS.module.css’)</li>
      </ul>`,
    },
    {
      question:
        "How to communicate with the Parent and Children component in respective data",
      answer: `<ul>
        <li>We need to use PROPS to pass data from parent to child.</li>
        <li>But if you need to pass data from child to parent, you have to</li>
        <ol>
          <li>Create a callback function in the parent component</li>
          <li>This callback function will get the data from the child component</li>
          <li>Pass the callback function in the parent as a prop to the child component</li>
          <li>The child component calls the parent callback function using props</li>
        </ol>
      </ul>`,
    },
    {
      question: "When component re-renders in React",
      answer: `<ul>
        <li>State Update</li>
        <li>Prop Update</li>
        <li>Re-rendering of the parent component</li>
      </ul>`,
    },
  ];
  var parser = new DOMParser();
  console.log();
  return (
    <>
      <Accordion defaultActiveKey={[0]} alwaysOpen>
        {data.map((item, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{Parser(item.answer)}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}
