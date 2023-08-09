import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom"
import { PropsWithChildren } from "react"

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const user = useSelector((state: any) => state.taskState)
    return (
        <div>
            {
                user ? <div>{children}</div> : <Navigate to="/sign-in" />
            }
        </div>
    )
}

export default PrivateRoute