import { useState } from "react";

function App() {
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const [inputValue, setInputVale] = useState("");

  return (
    <>
      {!thankYouOpen && (
        <RatingComponent
          setThankYouOpen={setThankYouOpen}
          inputValue={inputValue}
          setInputVale={setInputVale}
        />
      )}
      {thankYouOpen && <ThankyouComponent inputValue={inputValue} />}
    </>
  );
}

function RatingComponent({ setThankYouOpen, setInputVale, inputValue }) {
  function handleButtonClick() {
    if (!inputValue) {
      return;
    } else {
      setThankYouOpen(true);
    }
  }

  return (
    <div className="component component__rating" id="rating">
      <div className="icon__star">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <h3 className="heading">How did we do?</h3>
      <p className="paragraph">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <form className="rating__form" id="form">
        <div className="inputs">
          <input
            className="radio"
            type="radio"
            id="1"
            name="rating-value"
            value="1"
            onChange={(event) => setInputVale(event.target.value)}
          />
          <label htmlFor="1">1</label>
          <input
            className="radio"
            type="radio"
            id="2"
            name="rating-value"
            value="2"
            onChange={(event) => setInputVale(event.target.value)}
          />
          <label htmlFor="2">2</label>
          <input
            className="radio"
            type="radio"
            id="3"
            name="rating-value"
            value="3"
            onChange={(event) => setInputVale(event.target.value)}
          />
          <label htmlFor="3">3</label>
          <input
            className="radio"
            type="radio"
            id="4"
            name="rating-value"
            value="4"
            onChange={(event) => setInputVale(event.target.value)}
          />
          <label htmlFor="4">4</label>
          <input
            className="radio"
            type="radio"
            id="5"
            name="rating-value"
            value="5"
            onChange={(event) => setInputVale(event.target.value)}
          />
          <label htmlFor="5">5</label>
        </div>
        <button
          onClick={handleButtonClick}
          type="submit"
          className="btn__submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function ThankyouComponent({ inputValue }) {
  return (
    <div className="component component__thankyou" id="thank-you">
      <div className="img__box">
        <img
          className="img"
          src="./images/illustration-thank-you.svg"
          alt="thank you illustration"
        />
      </div>
      <div className="selected" id="selected">
        You selected {inputValue} out of 5
      </div>
      <h3 className="heading">Thank you!</h3>
      <p className="paragraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default App;
