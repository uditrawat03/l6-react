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
    if (this.props.isLoader) {
      return <Loader />;
    } else {
      let that = this;

      const dataGrid = this.props.data.data.map(item => {
        return (
          <TableRow key={item.id}>
            {that.props.columns.map(column => {
              return (
                <TableCell key={column.field}>{item[column.field]}</TableCell>
              );
            })}
          </TableRow>
        );
      });

      const tableHeader = this.props.columns.map(column => {
        return (
          <TableCell
            key={column.field}
            onClick={() => {
              this.handleSorting(column.field);
            }}
          >
            {column.name}
          </TableCell>
        );
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
            rowsPerPage={
              this.props.data.per_page == "undefined"
                ? this.props.data.per_page
                : 10
            }
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
