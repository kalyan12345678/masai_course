import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to TaskTrack</h1>
    <Link to="/tasks"><button>Go to Tasks</button></Link>
  </div>
);

export default Home;
