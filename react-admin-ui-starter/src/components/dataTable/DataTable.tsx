import { Link } from "react-router-dom";
import { GridColDef, GridToolbar, DataGrid } from "@mui/x-data-grid";
import "./dataTable.scss";

interface DataTableProps {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  onDeleteRow: (id: number) => void; // Typing for delete handler
}

const DataTable: React.FC<DataTableProps> = ({ columns, rows, slug, onDeleteRow }) => {
  const handleDelete = (id: number) => {
    onDeleteRow(id); // Call the parent-provided delete function with the ID
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => (
      <div className="action">
        <Link to={`/${slug}/${params.row.id}`}>
          <img src="/view.svg" alt="View" />
        </Link>
        <div className="delete" onClick={() => handleDelete(params.row.id)}> {/* Use handleDelete */}
          <img src="/delete.svg" alt="Delete" />
        </div>
      </div>
    ),
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={[...columns, actionColumn]} // Include the action column
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10, 20, 50]} // Different page size options
        checkboxSelection // Enable checkbox selection
        disableRowSelectionOnClick // Avoid selecting rows when clicking on them
      />
    </div>
  );
};

export default DataTable;
