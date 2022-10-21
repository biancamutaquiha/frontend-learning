import React, {useState, useEffect} from 'react';
import './styles.css';
import { Card, CardProps } from '../../components/Card';

type ProfileResponse = {
  login: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string
}

function Home() {
  const [personName, setPersonName] = useState('');
  const [people, setPeople] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);
  
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
    .then(response => response.json() as unknown as ProfileResponse)
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
