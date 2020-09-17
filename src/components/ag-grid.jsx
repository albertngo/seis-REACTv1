import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

let selectedNodes;
function renderActions() {
  return "<button>+</button>";
}

class AgGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: [
        {
          orgHierarchy: ["Erica Rogers"],
          jobTitle: "CEO",
          employmentType: "Permanent",
        },
        {
          orgHierarchy: ["Erica Rogers", "Malcolm Barrett"],
          jobTitle: "Exec. Vice President",
          employmentType: "Permanent",
        },
        {
          orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker"],
          jobTitle: "Director of Operations",
          employmentType: "Permanent",
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Esther Baker",
            "Brittany Hanson",
          ],
          jobTitle: "Fleet Coordinator",
          employmentType: "Permanent",
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Esther Baker",
            "Brittany Hanson",
            "Leah Flowers",
          ],
          jobTitle: "Parts Technician",
          employmentType: "Contract",
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Esther Baker",
            "Brittany Hanson",
            "Tammy Sutton",
          ],
          jobTitle: "Service Technician",
          employmentType: "Contract",
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Esther Baker",
            "Derek Paul",
          ],
          jobTitle: "Inventory Control",
          employmentType: "Permanent",
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Francis Strickland",
          ],
          jobTitle: "VP Sales",
          employmentType: "Permanent",
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Francis Strickland",
            "Morris Hanson",
          ],
          jobTitle: "Sales Manager",
          employmentType: "Permanent",
        },
        {
          orgHierarchy: [
            "Erica Rogers",

            "Malcolm Barrett",
            "Francis Strickland",
            "Todd Tyler",
          ],
          jobTitle: "Sales Executive",
          employmentType: "Contract",
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Francis Strickland",
            "Bennie Wise",
          ],
          jobTitle: "Sales Executive",
          employmentType: "Contract",
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Francis Strickland",
            "Joel Cooper",
          ],
          jobTitle: "Sales Executive",
          employmentType: "Permanent",
        },
      ],
      columnDefs: [
        {
          lockPosition: true,
          cellRenderer: renderActions,
          // cellClass: 'locked-col',
          maxWidth: 60,
          // suppressNavigable: true,
        },
        { field: "jobTitle" },
        { field: "employmentType" },
      ],
      defaultColDef: { flex: 1 },
      autoGroupColumnDef: {
        headerName: "Organisation Hierarchy",
        minWidth: 300,
        cellRendererParams: { suppressCount: true },
      },
      groupDefaultExpanded: -1,
      getDataPath: function (data) {
        return data.orgHierarchy;
      },
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  gridOptions = {
    onRowClicked: (event) => {
      let rowNode = event.node;
      rowNode.setSelected(true);
      selectedNodes = this.gridApi.getSelectedNodes();
      console.log(selectedNodes);
    },
  };

  addNewRow = () => {};
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              //gridOptions THIS SET TAKES PRECEDENT COMPARED TO ABOVE
              getRowHeight={this.getRowHeight}
              rowData={this.state.rowData}
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              autoGroupColumnDef={this.state.autoGroupColumnDef}
              treeData={true}
              filterable={true}
              animateRows={true}
              groupDefaultExpanded={this.state.groupDefaultExpanded}
              getDataPath={this.state.getDataPath}
              onGridReady={this.onGridReady}
              gridOptions={this.gridOptions}
              rowSelection={"multiple"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AgGrid;
