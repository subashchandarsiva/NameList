import './App.css';
import {useState} from 'react'
import AddUser from './components/Users/AddUser';
import ShowUsers from './components/Users/ShowUsers';

const MOCK_USERS =[{username:"test1",age:29,id:1},{username:"test2",age:21,id:2},{username:"test3",age:30,id:3}]
function App() {

  const [users,setUsers] = useState(MOCK_USERS)

  const AddingUser =(uname,uage,uid)=>{
    setUsers((prevState)=>{
     return [...prevState,{username:uname,age:uage,id:uid}]})
  }

  return (
    <div className="App">
        <AddUser addUser={AddingUser}/>
        <ShowUsers users={users} />
    </div>
  );
}

export default App;
