import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle,FaTimesCircle } from "react-icons/fa";



const Toast = ({title,error}) => {
    return (
      <div className="d-flex">
        {error ? (
          <FaTimesCircle
            style={{ color: "red", marginRight: 10, fontSize: 20 }}
          />
        ) : (
          <FaCheckCircle
            style={{ color: "green", marginRight: 10, fontSize: 20 }}
          />
        )}
        <h6 style={{ color: "#fff" }}>{title}</h6>
      </div>
    );
}

export default  Toast