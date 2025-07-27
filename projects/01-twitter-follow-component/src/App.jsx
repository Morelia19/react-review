import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    const users = [
        {
            username: 'ailerom',
            name: 'More',
            isFollowing: true
        },
        {
            username: 'lebiram',
            name: 'Mary',
            isFollowing: false
        },
        {
            username: 'leirbag',
            name: 'Gabriel',
            isFollowing: false
        },
        {
            username: 'siul',
            name: 'Luis',
            isFollowing: false
        }
    ]

    return(
        <section className='App'>
            {
                users.map(user=>{
                    const {username, name, isFollowing} = user
                    return(
                        <TwitterFollowCard initionalIsFollowing={isFollowing} username={username}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}