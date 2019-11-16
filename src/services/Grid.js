import React, { Component } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination
} from "@material-ui/core";
import Loader from "../components/layouts/loader/Loader";

export class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.props.getData("");
  }

  handleChangePage = (event, newPage) => {
    newPage = newPage + 1;
    const param = `?page=${newPage}&limit=${this.props.data.per_page}`;
    this.props.getData(param);
  };

  handleChangeRowsPerPage = event => {
    const param = `?limit=${parseInt(event.target.value, 10)}`;
    this.props.getData(param);
  };

  render() {
    if (this.props.isLoader) {
      return <Loader />;
    } else {
      let that = this;
      const dataGrid = this.props.data.data.map(item => {
        return (
          <TableRow key={item.id}>
            {that.props.columns.map(column => {
              return <TableCell>{item[column.field]}</TableCell>;
            })}
          </TableRow>
        );
      });

      const tableHeader = this.props.columns.map(column => {
        return <TableCell>{column.name}</TableCell>;
      });

      return (
        <div>
          <Table stickyHeader>
            <TableHead>
              <TableRow>{tableHeader}</TableRow>
            </TableHead>
            <TableBody>{dataGrid}</TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={this.props.data.total}
            rowsPerPage={this.props.data.per_page}
            page={this.props.data.current_page - 1}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </div>
      );
    }
  }
}

export default Grid;
