import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import "./add.scss";

interface AddProps {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onAdd: (data: Record<string, any>) => void; // Callback function for form submission
}

const Add: React.FC<AddProps> = ({ slug, columns, setOpen, onAdd }) => {
  const [formValues, setFormValues] = useState<Record<string, any>>({}); // State to store form data

  const handleInputChange = (field: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    })); // Update the form value for the given field
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    onAdd(formValues);


    setOpen(false);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>×</span> {/* Close the modal */}
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img") // Exclude non-input fields
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input
                  type={column.type === "number" ? "number" : "text"} // Set input type based on column type
                  placeholder={column.headerName} // Use header name as placeholder
                  value={formValues[column.field] || ""} // Set value from formValues
                  onChange={(e) => handleInputChange(column.field, e.target.value)} // Update state on change
                />
              </div>
            ))}
          <button type="submit">Send</button> {/* Trigger form submission */}
        </form>
      </div>
    </div>
  );
};

export default Add;
