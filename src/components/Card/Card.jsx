import { memo, useContext } from "react";
import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js"
import LikeButton from "../LikeButton/LikeButton.jsx";

const Card = memo(({ card, onCardClick, openDelete, onCardLike }) => {
    const currentUser = useContext(CurrentUserContext)
    return (
        <li className="elements__item">
            <article className="elements__list">
                {currentUser._id === card.owner && <button className="elements__remove" type="button" onClick={() => { openDelete(card._id) }} />}
                <img className="elements__image"
                    alt={`Изображение ${card.name}`}
                    src={card.link}
                    onClick={() => onCardClick({ link: card.link, name: card.name })} />
                <div className="elements__group">
                    <h2 className="elements__title">{card.name}</h2>
                    <LikeButton myid={currentUser._id} card={card} onCardLike={onCardLike} />
                </div>
            </article>
        </li>
    )
})

export default Card;