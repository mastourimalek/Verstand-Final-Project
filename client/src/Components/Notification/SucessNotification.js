import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { clearSuccessMessage } from "../../JS/Actions/message";
import { clearSuccessOrder } from "../../JS/Actions/order";
import { clearSuccessProduct } from "../../JS/Actions/product";
import { clearSuccess } from "../../JS/Actions/user";

const SucessNotification = ({ success }) => {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setshow(false);
      dispatch(clearSuccessProduct());
      dispatch(clearSuccessMessage());
      dispatch(clearSuccessOrder());
      dispatch(clearSuccess());
    }, 6000);
  }, [show, dispatch]);

  return (
    <div>
      <div>
        {show && (
          <div>
            {toast.success(success.msg)}
            <ToastContainer
              theme="colored"
              position="top-center"
              autoClose={2000}
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

export default SucessNotification;
