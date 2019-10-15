import React,{Component} from 'react';
import Header from './Header';
import Home from './Home';
import FeatureInner from './FeatureInner';
import ServiceInner from './ServiceInner';
import PriceInner from './PriceInner';
import Blog from './Blog';
import BlogDetails from './BlogDetails';
import Contact from './Contact';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/feature1" component={FeatureInner} />
            <Route path="/service1" component={ServiceInner} />
            <Route path="/pricing1" component={PriceInner} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog-details" component={BlogDetails} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
