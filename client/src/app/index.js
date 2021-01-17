import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles';
import Navigation from './components/Navigation';
import LandingView from './components/home/views/LandingView';
import LoginView from './components/auth/views/LoginView';
import PrivateRoute from './routing/PrivateRoute';
import {MaterialTheme} from './styles/MaterialTheme';

function App() {
  return (<ThemeProvider theme = {MaterialTheme}><Router><Navigation /><Switch><
          Route exact path = "/login" component = {LoginView} /><
          Route eaxct path = "/" component = {LandingView} /></ Switch><
          / Router></ ThemeProvider>);
}

export default App;
