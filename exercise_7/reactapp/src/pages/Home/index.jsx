import React, {useState} from 'react';
import './styles.css';
import { Card } from '../../components/Card';

function Home() {
  const [personName, setPersonName] = useState();
  const [people, setPeople] = useState([]);
  
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
  }
  
  return (
    <div className='container'>
      <h1>Presence List</h1>
      <input 
        type="text" 
        placeholder="type here"
        onChange={e => setPersonName(e.target.value)} 
      />
      <button type='button' onClick={handleAddStudant}>
        Send
      </button>

      {
        people.map(person => <Card name={person.name} time={person.time}/>)
      }
      
    </div>
    
  )
}

export default Home
