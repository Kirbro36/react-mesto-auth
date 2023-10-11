import Header from "../Header/Header.jsx"
import Main from "../Main/Main.jsx"
import React from "react";


export default function ProtectedPage({dataUser, ...props}) {
    return (
        <>
            <Header dataUser={dataUser} />
            <Main
                name='content'
                {...props} />
        </>
    )
}