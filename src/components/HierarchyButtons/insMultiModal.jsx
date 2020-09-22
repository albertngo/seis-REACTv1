import React, { Component } from "react";
import "./insMultiModal.css";
// import {
//   TextField,
//   FormControl,
//   InputLabel,
//   Input,
//   FormHelperText,
//   Modal,
// } from "@material-ui/core";

class InsMultiModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numRows: 1,
    };
  }
  render() {
    return (
      <div style={{ width: "500px", height: "500px" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Submitted");
          }}
        ></form>
      </div>
    );
  }
}

export default InsMultiModal;
