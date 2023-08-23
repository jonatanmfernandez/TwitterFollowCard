import "../App.css"
import "../index.css"
import {useState} from 'react'
 
// eslint-disable-next-line react/prop-types
export default function TwitterFollowCard({ formattedUserName, userName, name}) {

    const [isFollowing, setIsFollowing] = useState(false)
   
    const text = isFollowing? 'Unfollow':'Follow'
    const buttonClassName = isFollowing? 'button is-following':'button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

  return (
    <article className='tw-followCard'> 
        <header className='tw-followCard-header'> 
             <img 
             className='tw-followCard-avatar' 
             alt="avatarUser-1" 
             src={`https://unavatar.io/${userName}`}/>
            <div className='tw-followCard-info'> 
                <strong> {name} </strong>
                <span className='tw-followCard-infoUserName'> {formattedUserName} </span>
            </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
    </article>
  )
}
