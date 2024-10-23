import { createContext, useState } from "react"

export const MyContext = createContext(null);

const AppContext = ({children}) => {
  const [store , setStore] = useState({
    cart : [],
    counterCart : 0,
    totalCart : 0,
    searchTerm : ''
  })


return (
    <MyContext.Provider value={{store, setStore}}>
      {children}
      </MyContext.Provider>
)
}

export default AppContext