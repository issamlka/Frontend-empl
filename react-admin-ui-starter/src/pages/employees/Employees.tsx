import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./employees.scss"
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "img", headerName: 'Avatar', width: 100,
      renderCell: (params)=>{
        return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
    },
    
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'address',
      headerName: 'Address',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'salaries',
      headerName: 'Salaries',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (Value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];



const Employees = () => {
  const [open,setOpen] = useState(false)
    return (

    <div className="employees">
        <div className="info">
            <h1>Employees</h1>
            <button onClick={() => setOpen(true)}>Add New Employee</button>
        </div>
        <DataTable slug="employees" columns={columns} rows={userRows}/>
          {open && <Add slug="employee" columns={columns} setOpen={setOpen}/>}
    </div>
    
    )
}

export default Employees