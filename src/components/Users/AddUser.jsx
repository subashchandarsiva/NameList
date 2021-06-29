import { useState ,useRef} from 'react'
import Modal from '../UI/Modal';
import './AddUser.css'

const AddUser =(props)=>{
   const userNameRef= useRef();
   const userAgeRef= useRef();

    // const [username,setUsername] = useState("");
    // const [age,setAge]= useState("");
    const [error,setError] = useState()

    const AddUserHandler = event =>{
        event.preventDefault()

        const username = userNameRef.current.value;
        const age = userAgeRef.current.value;

        if(username.trim().length===0 || age.trim().length===0){
            setError({
                title:"Invalid Input",
                message:"Please check the username and the age input"
            })
            return;
        }
        if(age<0){
            setError({
                title:"Invalid Age",
                message:"Please check the age input - it should be greater than 0"
            })
            return;
        }
        let id= Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

        props.addUser(username,age,id) 
        // setAge(""); 
        // setUsername("") 
       userNameRef.current.value="";
        userAgeRef.current.value=""
    }
    // const UsernameHandler =(event)=>{
    //     setUsername(event.target.value)
    // }
    // const AgeHandler =(event)=>{
    //     setAge(event.target.value)
    // }

    const ClearErrorHandler =()=>{
        setError()
    }

    return(
        <>
       {error && <Modal title={error.title} message={error.message} onConfirm={ClearErrorHandler} />} 
        <form onSubmit={AddUserHandler}>
            <label htmlFor="username">User Name</label>
            <input id="username" type="text" ref={userNameRef} />
            <label htmlFor="age">Age</label>
            <input id="age" type="number" ref={userAgeRef} />
            <div id="buttons">
            <button id="button_cancel" type="button">Cancel</button>
            <button id="button_user" type="submit">Add User</button>
            </div>
            
            
            
        </form>
        </>
    )
}

export default AddUser