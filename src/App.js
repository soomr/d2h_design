import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [notifications, setNotifications] = useState([]);
  const [activeUser, setActiveUser] = useState(-1)
  let people = [{
    "name": "Ashley",
    "userid": 1
  },
  {
    "name": "Jack",
    "userid": 2
  },
  {
    "name": "Adam",
    "userid": 3
  }
  ]


  const DisplayNotification = () => {
    console.log("adfsdf")
    return (
      <div>
        {notifications.join(' ')}
      </div>
    )
  }
  function createNotif(userid) {
    setNotifications(notifications.concat(userid))
    console.log(userid)
  }
  const ArraytoList = ({arr}) => {
    const list = arr.map((d) => <li key = {d.name}>{d.name}</li>)
    return (
      <div>
         {list} 
      </div>
    
    )
  }
  const NotificationArea = () => {
    const arr = people.filter(p => p.userid === activeUser)
    return (
       <div>
          <ArraytoList arr = {arr} />
       </div>
    )
  }

  const Buttoner = ({ name, userid }) => {
    console.log(userid)
    return (
      <button onClick={() => createNotif(userid)}>{name} </button>
    )
  }
  const DisplayUsers = ({ user_array }) => {
    const buttonlist = user_array.map((d) => <Buttoner key={d.name} name={d.name} userid={d.userid} />)
    return (
      <div>
        <ArraytoList arr = {user_array} />
        {buttonlist}
      </div>
    )
  }
  const [name, setName] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    setActiveUser(name)

  }

  return (
    <div>
      <DisplayUsers user_array={people} />
      <DisplayNotification />
      <NotificationArea/>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} value={name}></input>
        <button type='submit'>Click to submit</button>
      </form>
    </div>
  );

}

export default App;
