import React from "react";

export default function Alert(props) {
  const Captalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show container my-4`}
          role="alert"
        >
          <strong>Type: </strong> {Captalize(props.alert.type)} <br></br>
          <strong>Message:</strong> {props.alert.msg}
        </div>
      )}
    </div>
  );
}
