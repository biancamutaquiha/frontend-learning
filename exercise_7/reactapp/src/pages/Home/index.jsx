import './styles.css';
import { Card } from '../../components/Card';

function Home() {
  return (
    <div className='container'>
      <h1>Presence List</h1>
      <input type="text" placeholder="type here" />
      <button>Send</button>

      <Card />
      <Card />
      <Card />
    </div>
    
  )
}

export default Home
