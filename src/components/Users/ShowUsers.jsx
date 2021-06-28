import './ShowUsers.css'


const ShowUsers =(props)=>{
    return(
        <ul className="show_users">
            {props.users.map(user=>{
                return(
                    <p className="user_list" key={user.id}>{user.username} is {user.age} years old </p>                    
                ) 
            })}
        </ul>
    )
}

export default ShowUsers