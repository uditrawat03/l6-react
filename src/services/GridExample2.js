"use strict";

import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css";
import api from "./api";

class GridExample2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: AllModules,
      columnDefs: [{ field: "id" }, { field: "name" }, { field: "code" }],
      defaultColDef: {
        width: 120,
        resizable: true
      },
      rowModelType: "serverSide",
      cacheBlockSize: 10,
      maxBlocksInCache: 10,
      paginationPageSize: 10
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    let server = new FakeServer();
    let datasource = new ServerSideDatasource(server);
    params.api.setServerSideDatasource(datasource);
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            height: "500px",
            paddingTop: "26px",
            boxSizing: "border-box"
          }}
        >
          <div
            id="myGrid"
            style={{
              height: "100%",
              width: "100%"
            }}
            className="ag-theme-balham-dark"
          >
            <AgGridReact
              modules={this.state.modules}
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              rowModelType={this.state.rowModelType}
              cacheBlockSize={this.state.cacheBlockSize}
              maxBlocksInCache={this.state.maxBlocksInCache}
              animateRows={true}
              pagination={true}
              onGridReady={this.onGridReady}
              paginationPageSize={this.state.paginationPageSize}
            />
          </div>
        </div>
      </div>
    );
  }
}

function ServerSideDatasource(server) {
  return {
    getRows: function(params) {
      setTimeout(function() {
        var response = server.getResponse(params.request);
        if (response.success) {
          response.getData.then(res => {
            params.successCallback(res.data, res.total);
          });
        } else {
          params.failCallback();
        }
      }, 500);
    }
  };
}

function FakeServer(url) {
  return {
    getResponse: function(request) {
      let page = request.endRow / 10;
      let param = {
        page: page
      };

      return {
        success: true,
        getData: api.service.get("crm/companies", param)
      };
    }
  };
}

export default GridExample2;
