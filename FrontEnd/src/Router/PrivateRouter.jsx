import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = () => {

const token = sessionStorage.getItem("token")
  return (
    token ? <Outlet/> : <Navigate to='/'/>
  )
}

export default PrivateRouter