import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearErrorsOrder } from "../../JS/Actions/order";
import { clearErrors } from "../../JS/Actions/user";

const Notification = ({ error }) => {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setshow(false);
      dispatch(clearErrorsOrder());
      dispatch(clearErrors());
    }, 6000);
  }, [show, dispatch]);

  return (
    <div>
      <div>
        {show && (
          <div>
            {toast.error(error.msg)}
            <ToastContainer
              theme="colored"
              position="top-center"
              autoClose={6000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              pauseOnHover
              draggable
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
