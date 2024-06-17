import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogin = () => {
   const [loading, setLoading] = useState(false)
   const { setAuthUser } = useAuthContext()

   const login = async (username, password) => {
      const success = handleInpuErrors(username, password)
      if (!success) return;

      setLoading(true)
      try {
         const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
         })

         const data = await res.json()

         if (!res.ok) {
            throw new Error(data.message)
         }

         localStorage.setItem("chat-user", JSON.stringify(data.user));
         setAuthUser(data.user)
      } catch (error) {
         toast.error(error.message)
      } finally {
         setLoading(false)
      }
   }

   return { loading, login }
}

function handleInpuErrors(username, password) {
   if (!username || !password || (!username && !password)) {
      toast.error('Please fill all the fields')
      return false;
   }

   if (password.length < 6) {
      toast.error('Password should be at least 6 characters long')
      return false;
   }

   return true;
}

export default useLogin