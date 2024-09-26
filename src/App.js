import "./styles.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStep(state) {
    if (state > 0) {
      setStep((s) => s + 1);
    } else if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleCount(state) {
    if (state > 0) {
      setCount((c) => c + step);
    } else {
      setCount((c) => c - step);
    }
  }

  function generateMessage() {
    const date = new Date();
    date.setDate(date.getDate() + count);
    const msg = date.toLocaleDateString();

    if (count === 0) {
      return `Today is ${msg}`;
    } else if (count > 0) {
      return `${count} days from today is ${msg}`;
    } else {
      return `${count} days before today was ${msg}`;
    }
  }

  return (
    <div>
      <Steps step={step} handleStep={handleStep} />
      <Count count={count} handleCount={handleCount} />
      <Message msg={generateMessage()} />
    </div>
  );
}

function Steps({ step, handleStep }) {
  return (
    <div className="aligned">
      <button onClick={() => handleStep(-1)}>-</button>
      <p>{`Step: ${step}`}</p>
      <button onClick={() => handleStep(1)}>+</button>
    </div>
  );
}

function Count({ count, handleCount }) {
  return (
    <div className="aligned">
      <button onClick={() => handleCount(-1)}>-</button>
      <p>{`Count: ${count}`}</p>
      <button onClick={() => handleCount(1)}>+</button>
    </div>
  );
}

function Message({ msg }) {
  return (
    <div className="aligned">
      <p>{msg}</p>
    </div>
  );
}
