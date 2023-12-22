import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import env from "../secrets.js"

const { VITE_BACKEND_HOST, VITE_BACKEND_PORT, VITE_BASE_URL } = env

function WhatsappApis() {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    async function checkAuthentication() {
      try {
        const url = `${VITE_BACKEND_HOST}:${VITE_BACKEND_PORT}${VITE_BASE_URL}authenticate`
        let response = await axios({
          method: "post",
          url,
          withCredentials: true
        })

        console.log("Authorized User")
        console.log(response)

        setAuthenticated(true)
      } catch (err) {
        alert("Access denied")
        navigate("/login")
      }
    }

    checkAuthentication().catch(e => console.log(e))
  })

  return ( authenticated ? 
    <div>WhatsappApis</div> : ""
  )
}

export default WhatsappApis