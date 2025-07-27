import { useState } from 'react'

export function TwitterFollowCard( {initionalIsFollowing, username, children}) {
    const [isFollowing, setIsFollowing] = useState(initionalIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className = 'tw-followCard'>
            <header className = 'tw-followCard-header'>
                <img 
                    className = 'tw-followCard-avatar'
                    src={`https://unavatar.io/${username}`}
                    alt="El avatar del usuario" />
                <div className = 'tw-followCard-info'>
                    <strong className = 'tw-followCard-infoName'>{children}</strong>
                    <span className = 'tw-followCard-infoUsername'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className = {buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}