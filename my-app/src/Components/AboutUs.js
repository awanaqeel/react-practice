import React from "react";

export default function AboutUs(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "grey",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
  };
  document.title = "TextUtils - About Us";
  // const [myStyle, setMystyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  //   border: "1px solid white",
  // });
  // const [btnText, setBtnText] = useState("Enable Light Mode");
  // const toggleMode = () => {
  //   if (myStyle.color === "white") {
  //     setMystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setMystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Enable Light Mode");
  //   }
  // };
  return (
    <>
      <div className="container">
        <h1
          className="my-4 text-center"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <b>About Us</b>
        </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This is the first item's accordion body. It is shown by default,
                until the collapse plugin adds the appropriate classes that we
                use to style each element.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong>Free to Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                You can modify any of this with custom CSS or overriding our
                default variables. It's also worth noting that just about any
                HTML can go within the.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-4">
          <button onClick={toggleMode} className="btn btn-primary">
            {btnText}
          </button>
        </div> */}
      </div>
    </>
  );
}
