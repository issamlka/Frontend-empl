import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data";
import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable"
import "./postes.scss"
import Add from "../../components/add/Add"


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "img", headerName: 'Avatar', width: 100,
      renderCell: (params)=>{
        return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
    },
    
    {
      field: 'postName',
      headerName: 'Post name',
      width: 150,
      editable: true,
    },
    {
      field: 'employeeName',
      headerName: 'Employee name',
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
  
const Postes = () => {
    const [open,setOpen] = useState(false)
    return (

    <div className="postes">
        <div className="info">
            <h1>Employees</h1>
            <button onClick={() => setOpen(true)}>Add New Postes</button>
        </div>
        <DataTable slug="postes" columns={columns} rows={userRows}/>
          {open && <Add slug="post" columns={columns} setOpen={setOpen}/>}
    </div>
    
    )
}

export default Postes