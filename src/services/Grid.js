import React, { Component } from "react";
import { Link } from "react-router-dom";
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

  handleChangePage = (event, newPage) => {
    newPage = newPage + 1;
    this.props.getData(newPage, this.props.data.per_page);
  };

  handleChangeRowsPerPage = event => {
    const limit = parseInt(event.target.value, 10);
    this.props.getData(1, limit);
  };

  render() {
    if (this.props.isLoader) {
      this.props.getData(1, 10);
      return <Loader />;
    } else {
      let that = this;
      const dataGrid = this.props.data.data.map(item => {
        let edit = `/crm/company/edit/${item.id}`.replace("\\", "/");
        let view = `/crm/company/detail/${item.id}`.replace("\\", "/");
        return (
          <TableRow key={item.id}>
            {that.props.columns.map(column => {
              return <TableCell>{item[column.field]}</TableCell>;
            })}
            <TableCell>
              <Link to={edit}>
                <i className="edit icon"></i>edit
              </Link>
              <Link to={view}>
                <i className="eye icon"></i>view
              </Link>
            </TableCell>
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
              <TableRow>
                {tableHeader}
                <TableCell>Actions</TableCell>
              </TableRow>
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
