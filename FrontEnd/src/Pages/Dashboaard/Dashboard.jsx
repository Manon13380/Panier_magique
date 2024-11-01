import { useLocation } from "react-router-dom";
import Layout from "../../Components/Layouts";
import ProductsDashboard from "../../Components/ProductsDashbord/ProductsDashboard";
import SideBarDashboard from "../../Components/SideBarDashboard/SideBarDashboard";
import CreateProduct from "../../Components/CreateProduct/CreateProduct";

const Dashboard = () => {
  const location = useLocation();
  return (
    <>
      <Layout>
        <div className="ContainerDashboard">
          <SideBarDashboard />
          {location.pathname === "/Dashboard/CreateProduct" ? (
            <CreateProduct />
          ) : (
            <ProductsDashboard />
          )}
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
