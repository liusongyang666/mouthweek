import React, { Component } from 'react';
import { HashRouter as Router,Switch,Route,Redirect } from 'react-router-dom';
import One from '../components/component/one/index'
import Two from '../components/component/two/index'
import Three from '../components/component/three/index'
class RouerConfig extends Component {
state = { }
render() { 
return (
<React.Fragment> 
    <Router>   
    <React.Fragment>      
         <Switch>
            <Route path='/' exact component={One}/>
            <Route path='/two' exact component={Two}/>
            <Route path='/three' exact component={Three}/>
            <Redirect to="/" />
         </Switch>
         </React.Fragment>
    </Router>
</React.Fragment>
);
}

}
export default RouerConfig;