import axios from 'axios';

// Set the base URL for the Axios instance
const baseURL = 'http://localhost:8080/employees'; // Adjust if your backend base URL is different

// Create a custom Axios instance
const axiosInstance = axios.create({
  baseURL,
});

// Fetch all employees
export const fetchAllEmployees = async () => {
  try {
    const response = await axiosInstance.get();
    return response.data; // Return the list of employees
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error; // Rethrow the error so it can be handled by the caller
  }
};

// Fetch an employee by ID
export const fetchEmployeeById = async (id) => {
  try {
    const response = await axiosInstance.get(`/${id}`);
    return response.data; // Return the employee data
  } catch (error) {
    console.error(`Error fetching employee with ID ${id}:`, error);
    throw error;
  }
};

// Create a new employee
export const createEmployee = async (employeeDto) => {
  try {
    const response = await axiosInstance.post('/', employeeDto);
    return response.data; // Return the created employee data
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};

// Update an existing employee
export const updateEmployee = async (id, employeeDto) => {
  try {
    const response = await axiosInstance.put(`/${id}`, employeeDto);
    return response.data; // Return the updated employee data
  } catch (error) {
    console.error(`Error updating employee with ID ${id}:`, error);
    throw error;
  }
};

// Delete an employee by ID
export const deleteEmployee = async (id) => {
  try {
    await axiosInstance.delete(`/${id}`);
  } catch (error) {
    console.error(`Error deleting employee with ID ${id}:`, error);
    throw error;
  }
};
