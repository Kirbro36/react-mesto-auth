import { memo } from "react";
import React from "react";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Homepage from "../Homepage/Homepage.jsx";

const Main = memo(({ name, openCard, openProfile, openAvatar, onCardClick, openDelete, cards, isLoading, onCardLike, handleRegister, handleLogin }) => {

    return (
        <main className="content">
            {name === 'content' ?
                <Homepage
                    openCard={openCard}
                    openProfile={openProfile}
                    openAvatar={openAvatar}
                    openDelete={openDelete}
                    onCardClick={onCardClick}
                    onCardLike={onCardLike}
                    cards={cards}
                    isLoading={isLoading}
                />
                : name === 'signup' ?
                    <Register name={name} handleRegister={handleRegister} />
                    : <Login name={name} handleLogin={handleLogin} />
            }
        </main>
    )

})

export default Main;