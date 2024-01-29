import toast from "react-hot-toast";

const ToastDemo = () => {
  return (
    <button className="btn" onClick={() => toast.success("Success")}>
      Show Toast
    </button>
  );
};

export default ToastDemo;
