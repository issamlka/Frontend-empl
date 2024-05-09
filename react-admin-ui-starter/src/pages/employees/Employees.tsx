import { useEffect, useState } from 'react';
import { GridColDef, GridRowModel, GridRowsProp } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import { fetchAllEmployees, createEmployee, deleteEmployee, updateEmployee } from '../../service/EmployeeService';
import Employee from '../employee/Employee';
import Add from '../../components/add/Add';
import './employees.scss';
import { EmployeeInterface } from './EmployeeInterface';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 150,
  },
  {
    field: 'address',
    headerName: 'Address',
    type: 'string',
    width: 150,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'string',
    width: 150,
  },
  {
    field: 'salaries',
    headerName: 'Salaries',
    type: 'number',
    width: 150,
  },
];

const Employees = () => {
  const [employees, setEmployees] = useState<EmployeeInterface[]>([]); // Type the state with Employee
  const [open, setOpen] = useState<boolean>(false); // Type the state with boolean

  // Fetch all employees on component mount
  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await fetchAllEmployees();
        setEmployees(data); // Set the fetched employee data
        console.log(data)
      } catch (error) {
        console.error('Error loading employees:', error);
      }
    };

    loadEmployees();
  }, []); // Empty dependency array to ensure it runs only once

  const handleAddEmployee =  (employee: EmployeeInterface) => {
    try {
      const createdEmployee =  createEmployee(employee);
      setEmployees((prev) => [...prev, createdEmployee]);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleDeleteEmployee = async (id: number) => {
    try {
      await deleteEmployee(id);
      setEmployees((prev) => prev.filter((e) => e.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="employees">
      <div className="info">
        <h1>Employees</h1>
        <button onClick={() => setOpen(true)}>Add New Employee</button>
      </div>
      <DataTable
        slug="employees"
        columns={columns}
        rows={employees} // Type cast to GridRowsProp
        onDeleteRow={handleDeleteEmployee} // Implement onDeleteRow
      />
      {open && <Add slug="employee" columns={columns} setOpen={setOpen} onAdd={handleAddEmployee} />}
    </div>
  );
};

export default Employees;
