import React, { Component } from "react";

let i = 0;

function createNewRowData({ orgHierarchy }, numEntries = 1) {
  //loop through entries
  let newNodes = [];
  while (numEntries >= 1) {
    let newOrg = orgHierarchy.concat("New Entry " + ++i);
    let newData = {
      jobTitle: "",
      employmentType: "",
      orgHierarchy: newOrg,
    };
    //place into array
    newNodes.push(newData);
    numEntries--;
  }
  console.log(newNodes);
  return newNodes;
}

class FirstColButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInsertModal: false,
    };
  }
  insertSingleHandler() {
    let { data } = this.props;
    //get the data of the node
    let newNodeArr = createNewRowData(data);
    //create new row
    this.props.api.applyTransaction({ add: newNodeArr });
  }

  insertMutlipleHandler() {
    let numEntries = 2;

    let { data } = this.props;
    let newNodesArr = createNewRowData(data, numEntries);

    //apply changes
    this.props.api.applyTransaction({ add: newNodesArr });
  }
  render() {
    return (
      <div>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => this.insertSingleHandler()}
        >
          +
        </button>

        <button onClick={() => this.insertMutlipleHandler()}>++</button>
      </div>
    );
  }
}

export default FirstColButtons;
