// src/layouts/BrowseLayout.jsx
import { Outlet } from "react-router-dom";

const BrowseLayout = () => {  
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default BrowseLayout;