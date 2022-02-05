// import "./styles.css";

import { useState } from "react";

function isRequired(str) {
  return str.length > 0;
}

function isVAlidEmail(str) {
  return isRequired && str.endsWith("@gmail.com");
}

function biggerThenFive(str) {
  return str.length > 5;
}

function hasNumbers(str) {
  const numbers = str.split("").filter((char) => !Number.isNaN(Number(char)));
  return numbers.length > 0;
}

function isValidUserNAme(str) {
  if (str.length <= 5) {
    return false;
  }
  // Number nikaala haii bs
  const numbers = str.split("").filter((char) => !Number.isNaN(Number(char)));
  return numbers.length > 0;
}

export default function App() {
  const [userName, setUserName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isClean, setIsClean] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIsSubmitting(true);
          setTimeout(() => {
            setIsSubmitting(false);
          }, 5000);
          if (!isRequired(userName)) {
            setHasError(true);
            return;
          }
          console.log("submitted");
        }}
      >
        <input
          value={userName}
          onChange={(event) => {
            if (isClean) {
              setIsClean(false);
            }
            setUserName(event.target.value);
          }}
        />
        {!isRequired(userName) && !isClean ? (
          <p style={{ color: "red" }}>Invalid UserName</p>
        ) : null}
        {!biggerThenFive(userName) && !isClean ? (
          <p style={{ color: "red" }}>User Name is not long</p>
        ) : null}
        {!hasNumbers(userName) && !isClean ? (
          <p style={{ color: "red" }}>User Name should contain one number</p>
        ) : null}
        <button disabled={isSubmitting}>
          Submit {isSubmitting ? "ting" : ""}
        </button>
      </form>
    </div>
  );
}
