import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Reactr,Route,Switch,Link} from 'react-router-dom';
import PublicTabs from './components/publicTabs';
import User from './containers/user/user';
import Adduser from './containers/user/adduser';
import Trave from './containers/trave/trave';
import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render( <Reactr>
    <PublicTabs>
        <Switch>
            <Route path='/user' exact component={User} />
            <Route path='/adduser' exact component={Adduser} />
            <Route path='/trave' component={Trave} />
        
        </Switch>
    </PublicTabs>
 </Reactr>, document.getElementById('root'));
