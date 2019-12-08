import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: AllCommunityModules,
      columnDefs: [
        {
          headerName: "ID",
          width: 50,
          valueGetter: "node.id",
          cellRenderer: "loadingRenderer"
        },
        {
          headerName: "Athlete",
          field: "athlete",
          width: 150
        },
        {
          headerName: "Age",
          field: "age",
          width: 90
        },
        {
          headerName: "Country",
          field: "country",
          width: 120
        },
        {
          headerName: "Year",
          field: "year",
          width: 90
        },
        {
          headerName: "Date",
          field: "date",
          width: 110
        },
        {
          headerName: "Sport",
          field: "sport",
          width: 110
        },
        {
          headerName: "Gold",
          field: "gold",
          width: 100
        },
        {
          headerName: "Silver",
          field: "silver",
          width: 100
        },
        {
          headerName: "Bronze",
          field: "bronze",
          width: 100
        },
        {
          headerName: "Total",
          field: "total",
          width: 100
        }
      ],
      defaultColDef: { resizable: true },
      components: {
        loadingRenderer: function(params) {
          if (params.value !== undefined) {
            return params.value;
          } else {
            return '<img src="../images/loading.gif">';
          }
        }
      },
      rowBuffer: 0,
      rowSelection: "multiple",
      rowModelType: "infinite",
      cacheOverflowSize: 2,
      maxConcurrentDatasourceRequests: 1,
      maxBlocksInCache: 10,
      cacheOverflowSize: 2,
      infiniteInitialRowCount: 1,
      paginationPageSize: 10,
      cacheBlockSize: 10
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = data => {
      var dataSource = {
        rowCount: null,
        getRows: function(params) {
          console.log("asking for " + params.startRow + " to " + params.endRow);
          setTimeout(function() {
            var rowsThisPage = data.slice(params.startRow, params.endRow);
            var lastRow = -1;
            if (data.length <= params.endRow) {
              lastRow = data.length;
            }
            params.successCallback(rowsThisPage, lastRow);
          }, 500);
        }
      };
      params.api.setDatasource(dataSource);
    };

    httpRequest.open(
      "GET",
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json"
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div
          id="myGrid"
          style={{
            height: "200px",
            width: "100%"
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            modules={this.state.modules}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            components={this.state.components}
            debug={true}
            rowBuffer={this.state.rowBuffer}
            rowSelection={this.state.rowSelection}
            rowDeselection={true}
            rowModelType={this.state.rowModelType}
            paginationPageSize={this.state.paginationPageSize}
            cacheOverflowSize={this.state.cacheOverflowSize}
            maxConcurrentDatasourceRequests={
              this.state.maxConcurrentDatasourceRequests
            }
            infiniteInitialRowCount={this.state.infiniteInitialRowCount}
            maxBlocksInCache={this.state.maxBlocksInCache}
            onGridReady={this.onGridReady}
            pagination={true}
          />
        </div>
      </div>
    );
  }
}

export default GridExample;
