import Single from "../../components/single/Single";
import { singleEmployee } from "../../data";
import "./employee.scss"

//Fetch data and send to Single Component

const Employee = () => {
  return (
    <div className="employee">
       <Single {...singleEmployee}/> 
    </div>
  );
};

export default Employee;
