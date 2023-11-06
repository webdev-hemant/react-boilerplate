import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

const apiData = {
  employee: [
    {
      id: 1,
      name: "Ramesh",
      email: "ramesh@in.com",
      phone: "8989898787",
    },
    {
      id: 2,
      name: "Rakesh",
      email: "rakesh@in.com",
      phone: "8989898786",
    },
    {
      id: 3,
      name: "Rajesh",
      email: "rajesh@in.com",
      phone: "8989898785",
    },
    {
      id: 4,
      name: "Rishan",
      email: "rajesh@in.com",
      phone: "8989898785",
    },
    {
      id: 5,
      name: "Nihil",
      email: "rajesh@in.com",
      phone: "8989898785",
    },
    {
      id: 6,
      name: "rocky",
      email: "rajesh@in.com",
      phone: "8989898785",
    },
    {
      id: 7,
      name: "albert",
      email: "rajesh@in.com",
      phone: "8989898785",
    },
    {
      id: 8,
      name: "willam",
      email: "rajesh@in.com",
      phone: "8989898785",
    },
    {
      id: 9,
      name: "alex",
      email: "rajesh@in.com",
      phone: "8989898785",
    },
    {
      id: 10,
      name: "Mike",
      email: "rajesh@in.com",
      phone: "8989898785",
    },
    {
      id: 11,
      name: "Sreejith",
      email: "rajesh@in.com",
      phone: "8989898785",
    },
  ],
};

const Muitable = () => {
  const columns = [
    { id: "id", name: "Id" },
    { id: "name", name: "Name" },
    { id: "email", name: "Email" },
    { id: "phone", name: "Phone" },
  ];

  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = (event) => {
    rowperpagechange(+event.target.value);
    pagechange(0);
  };

  const [rows, rowchange] = useState([]);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);
  useEffect(() => {
    rowchange(apiData.employee);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MUI Table</h1>

      <Paper>
        <TableContainer sx={{ height: "70vh", width: "90vw" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                    key={column.id}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows
                  .slice(page * rowperpage, page * rowperpage + rowperpage)
                  .map((row, i) => {
                    return (
                      <TableRow key={i}>
                        {columns &&
                          columns.map((column, i) => {
                            let value = row[column.id];
                            return <TableCell key={value}>{value}</TableCell>;
                          })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowperpage}
          page={page}
          count={rows.length}
          component="div"
          onPageChange={handlechangepage}
          onRowsPerPageChange={handleRowsPerPage}
        ></TablePagination>
      </Paper>
    </div>
  );
};

export default Muitable;
