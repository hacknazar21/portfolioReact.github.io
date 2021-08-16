import './App.css';
import Header from './Components/Header/Header';
import { useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring'
import Home from './Components/Home/Home'
import Works from './Components/Works/Works'
import Contacts from './Components/Contacts/Contacts'
import { Switch, Route } from 'react-router-dom';


const App = () => {
  const location = useLocation();
  const transitions = useTransition(location,
    {
      enter: { opacity: 1, transform: 'translateX(0%)' },
      leave: { opacity: 0, transform: 'translateX(-100%)' },
      from: { opacity: 0, transform: 'translateX(100%)' },
    });
  return <>
    {transitions((props, item) => (
      <div style={{ position: 'absolute', width: '100%', top: '0', left: '0' }}>
        <Header currentLocation={location.pathname} />
        <animated.div style={props}>
          <Switch location={item}>
            <Route exact path='/' component={Home} />
            <Route exact path='/works' component={Works} />
            <Route exact path='/contacts' component={Contacts} />
          </Switch>
        </animated.div>
      </div>

    ))}
  </>;
}
export default App;
