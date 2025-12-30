import { Link } from 'react-router-dom';
import reactLogo from '../../public/react.svg';
import './Examples.css';

const Examples = () => {
  return (
    <div className="examples">
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React <code>ViewTransition</code> Demo</h1>
      <h2>Examples</h2>
      <hr />
      <div className="examples-container">
        <Link className="btn" to="/examples/basic" viewTransition>Basic</Link>
        <Link className="btn" to="/examples/list" viewTransition>List</Link>
        <Link className="btn" to="/examples/custom" viewTransition>Custom</Link>
      </div>
    </div>
  )
}

export default Examples;
