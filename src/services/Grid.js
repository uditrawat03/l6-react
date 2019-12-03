import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

// import Loader from "../components/layouts/loader/Loader";

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoader: true,
      page: 1,
      limit: 10,
      total: 0
    };
  }

  componentDidMount() {
    this.props.getData(this.state.page, this.state.limit);
  }

  handleChangePage = (event, newPage) => {
    newPage = newPage + 1;
    this.setState({ page: newPage });
    this.props.getData(newPage, this.state.limit);
  };

  handleChangeRowsPerPage = event => {
    const limit = parseInt(event.target.value, 10);
    this.setState({ limit: limit });
    this.props.getData(this.state.page, limit);
  };

  handleSorting = column => {
    console.log(column);
  };

  render() {
    const columns = [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" }
    ];

    const rows = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
    ];

    return (
      <div className="ag-theme-balham" style={{ height: "200px" }}>
        <AgGridReact
          enableSorting={true}
          columnDefs={columns}
          rowData={rows}
        ></AgGridReact>
      </div>
    );
  }
}

export default Grid;
