import React, {useState, useEffect} from 'react';
import './styles.css';
import { Card } from '../../components/Card';

function Home() {
  const [personName, setPersonName] = useState();
  const [people, setPeople] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});
  
  function handleAddStudant(){
    const newPerson = {
      name: personName,
      time: new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setPeople(prevState => [...prevState, newPerson])
  };
  
  useEffect(() =>{
    fetch('https://api.github.com/users/biancamutaquiha')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.login,
        avatar: data.avatar_url
      })
    })
  }, []);

  return (
    <div className='container'>
      <header>
        <h1>Presence List</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Git Hub profile picture" />
        </div>
      </header>
      
      <input 
        type="text" 
        placeholder="type here"
        onChange={e => setPersonName(e.target.value)} 
      />
      <button type='button' onClick={handleAddStudant}>
        Send
      </button>

      {
        people.map(person => 
          <Card 
            key={person.time} 
            name={person.name} 
            time={person.time}
          />
        )
      }
      
    </div>
    
  )
}

export default Home
