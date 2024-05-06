import "./topBox.scss";
import {topDealEmployees,} from "../../data.ts"

const topBox = () => {
  return (
    <div className="topBox">
      <h1>Top Employees</h1>
      <div className="list">
        {topDealEmployees.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default topBox;
