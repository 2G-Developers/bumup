import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Floater from './components/Floater/Floater';
import Footer from './components/Footer/Footer';

import contactPage from './pages/contact';
import whybumpup from './pages/whybumpup';

import Home from './pages/home';
import program from './pages/program';


function App() {
  return (
    <Router>
      {/* <ScrollToTop> */}
        <div className="app">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/program" component={program} />
            <Route path="/contact" component={contactPage} />
            <Route path="/whybumpup" component={whybumpup} />

          </Switch>
          <Floater />
          <Footer />
        </div>
      {/* </ScrollToTop> */}
    </Router>
  );
}

export default App;
