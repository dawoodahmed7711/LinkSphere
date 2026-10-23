'use client'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const SystemContext = createContext();

const ContextAPI = ({ children }) => {
  const [SignUp, setSignUp] = useState([])
  const [Login, setLogin] = useState(null)
  const [CurrentUser, setCurrentUser] = useState(null)
  const [pageData, setPageData] = useState({
    Profile: {
      Shape: '',
      Title: '',
      Bio: '',
      Image: '',
    },
    Theme: {
      Background: '',
      Button: '',
      ButtonStyle: '',
    },
    Links: [],
    TextStyle: {
      TextDecoration: "",
      TextColor: '',
      TextFont: '',
      TextHover: '',
    }


  })


  function GetSignUp(items) {
    setSignUp((prev) => [...prev, items])
    console.log(SignUp)

  }
  useEffect(() => {
    localStorage.setItem('SignUp', JSON.stringify(SignUp))
  }, [SignUp]);
  function GetLogin(item) {
    setLogin(item)

  }
  console.log(CurrentUser)


  return (
    <>
      <SystemContext.Provider value={{ GetSignUp, GetLogin, SignUp, Login, setCurrentUser, setPageData, pageData, CurrentUser }}>
        {children}
      </SystemContext.Provider>
    </>
  )
}

export default ContextAPI;
