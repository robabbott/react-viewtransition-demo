import reactLogo from '../../public/react.svg';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React <code>ViewTransition</code> Demo</h1>
      <div className="block">
        <h3>Features</h3>
        <ul className="list">
          <li>Built on the browser <a href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API" target="_blank">View Transitions</a> API</li>
          <li>Animates state changes, not elements</li>
          <li>Native performance from browser handling compositing</li>
          <li>Minimal code, no timing coordination</li>
          <li>Page/route transitions available today in <a href="https://reactrouter.com/how-to/view-transitions" target="_blank">React Router</a> v6.27+</li>
        </ul>
      </div>
      <div className="block">
        <h3>Gotchas</h3>
        <ul className="list">
          <li>React Canary-only today (12/30/25)</li>
          <li>Safari & Firefox very recently added support (Chromium fully supported)</li>
          <li>Performance pitfalls with expensive renders</li>
          <li>Every transition element must have a unique name</li>
        </ul>
      </div>
      <p className="btn-container">
        <Link className="btn" to="/examples" viewTransition>Examples!</Link>
      </p>
    </>
  )
}

export default Home;
