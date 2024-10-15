import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
