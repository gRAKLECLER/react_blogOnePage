import './App.css';
import Login from '../src/components/login'
import Register from '../src/components/Register'
import FormArticles from '../src/components/FormArticles'

export default function App() {

  return (
    <div className='blog'>
      <Login/>
      <Register/>
      <FormArticles/>
    </div>
  );
}

