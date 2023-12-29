import React, { useState } from "react"; // useState hook is help in making state variable
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleClickEventUp = () => {
    // let newText = text.toUpperCase();
    setText(text.toUpperCase());
    props.showAlert("Converted successfully to uppercase!", "success");
  };

  const handleClickEventLow = () => {
    // let newText = text.toUpperCase();
    setText(text.toLowerCase());
    props.showAlert("Converted successfully to lowercase!", "success");
  };

  const handleChangeEvent = (event) => {
    // console.log("Hey Change is Done");
    setText(event.target.value);
  };

  const handleEmailExtract = () => {
    var re = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/g;
    const emails = text.match(re);
    const myarr = [];
    if (emails) {
      emails.forEach((email) => {
        myarr.push(email);
      });
    } else {
      console.log("No email addresses found in the text.");
    }
    setText(myarr.toString());
    props.showAlert("Email extracted successfully!", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Clear Text Box successfully!", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces successfully!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied successfully!", "success");
  };
  const [text, setText] = useState(""); // text and setText is to be initialized using useState hook (text is the variable and setText is the function that is used to set the text of the variable text)
  document.title = "TextUtils - Home";
  return (
    <>
      <div
        className="container mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="my-4">{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleChangeEvent}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <button
          className="btn btn-primary mt-4 mx-2"
          onClick={handleClickEventUp}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mt-4 mx-2"
          onClick={handleClickEventLow}
        >
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mt-4 mx-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mt-4 mx-2"
          onClick={handleEmailExtract}
        >
          Email Extract
        </button>
        <button className="btn btn-primary mt-4 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mt-4 mx-2"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter((word) => word.trim() !== "").length}{" "}
          <b>Words</b> and {text.length} <b>Characters</b>
        </p>
        <p>
          {0.008 * text.split(" ").filter((word) => word.trim() !== "").length}{" "}
          are the minutes required to read this text.
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter the text in above to preview here"}
        </p>
      </div>
    </>
  );
}
TextForm.prototypes = { heading: PropTypes.string };
TextForm.defaultProps = { heading: "Enter the text to analyze" };
