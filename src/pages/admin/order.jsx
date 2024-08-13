import React, { useState } from "react"
import { Link } from "react-router-dom";

const Order = ({ item, index, handleStatusChange }) => {
  const [statusDropdown, setStatusDropdown] = useState(false)
  return (
    <tr style={{position: "relative"}}>
      <td>{index + 1}</td>
      <td>
        <div id="username-and-image">
          <Link to={`/posts/details/${item?.postId._id}`}>{item?.postId?.title}</Link>
        </div>
      </td>
      <td>{`${item?.user?.country}, ${item?.user?.state}, ${item?.user?.city}`} <hr style={{margin:"1rem"}} />{item?.user?.phoneNumber}</td>
      <td>
        <div id="table-btns-group">

          <button onClick={()=> setStatusDropdown((prev) => !prev)} className="btn btn-alt">
            {item?.status}
          </button>
          {statusDropdown && (
            <div style={{position: "absolute", right: "7px",top: "15px", overflow:"visible",display: "flex", flexDirection: "column", zIndex:"2", backgroundColor: "#00000099",}} id="status-dropdown">
              {item?.status != "Pending" && <button style={{fontSize:"14px"}} onClick={() => {setStatusDropdown(false);handleStatusChange(item._id, "Pending")}} className="btn btn-alt">Pending</button>}
              {item?.status != "Shipped" && <button style={{fontSize:"14px"}} onClick={() => {setStatusDropdown(false);handleStatusChange(item._id, "Shipped")}} className="btn btn-alt">Shipped</button>}
              {item?.status != "Delivered" && <button style={{fontSize:"14px"}} onClick={() => {setStatusDropdown(false);handleStatusChange(item._id, "Delivered")}} className="btn btn-alt">Delivered</button>}
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default Order;
