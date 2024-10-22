import { createContext, useState } from "react"
import MensClothing from "../Pages/Men'sClothing";

export const MyContext = createContext(null);

const AppContext = ({children}) => {
  const [store , setStore] = useState({
    cart : []
  })


return (
    <MyContext.Provider value={{store, setStore}}>
      {children}
      </MyContext.Provider>
)
}

export default AppContext