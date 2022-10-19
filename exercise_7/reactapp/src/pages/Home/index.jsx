import './styles.css';
import { Card } from '../../components/Card';

function Home() {
  return (
    <div className='container'>
      <h1>Presence List</h1>
      <input type="text" placeholder="type here" />
      <button>Send</button>

      <Card name="Bianca" time="12:30"/>
      <Card name="Olivio" time="14:23"/>
      <Card name="Jeppe" time="16:45"/>
    </div>
    
  )
}

export default Home
