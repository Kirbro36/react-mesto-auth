import { Navigate } from "react-router-dom"
import React from "react"
// import Main from "../Main/Main"
// import Header from "../Header/Header"

export default function ProtectedRoute({ element: ProtectedPage, loggedIn, ...props }) {
    return (
        loggedIn ? 
        <ProtectedPage {...props} />
        : <Navigate to={'/sign-in'} replace />
    )
}