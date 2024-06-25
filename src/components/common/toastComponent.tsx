import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

type status = {
    isSuccess: boolean,
    isError: boolean,
    msg: any,
}

const ToastComponent = ({ isSuccess, isError, msg }: status) => {
    
  useEffect(() => {
    if (isSuccess) {
        toast.success(msg)
    }
    if (isError) {
        toast.error(msg);
    }
  }, [isSuccess, isError]);

    return (
        <Toaster containerClassName="p-8" />
    )
}

export default ToastComponent;