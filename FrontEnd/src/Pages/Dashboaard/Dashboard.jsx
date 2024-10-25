import Layout from "../../Components/Layouts";
import ProductsDashboard from "../../Components/ProductsDashbord/ProductsDashboard";
import SideBarDashboard from "../../Components/SideBarDashboard/SideBarDashboard";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div className="ContainerDashboard">
          <SideBarDashboard/>
          <ProductsDashboard/>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
