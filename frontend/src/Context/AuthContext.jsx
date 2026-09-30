import { createContext } from "react"
import React from 'react'
export const authContext =createContext()



function AuthContext({children}) {
  let serverUrl = "http://localhost:8000"
   let value = {
    serverUrl
   }
  return (
    <div>
        <authContext.Provider value={value}>
          {children}
        </authContext.Provider>
    </div>
  )
}

export default AuthContext
