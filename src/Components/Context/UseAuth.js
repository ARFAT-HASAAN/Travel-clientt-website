import { useContext } from "react"
import { AuthContext } from "./Authprovider"

const UseAuth = () => {

    return useContext(AuthContext)
}

export default UseAuth;