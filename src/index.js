import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Reactr,Route,Switch} from 'react-router-dom';
import './common/index.less';
import Home from './containers/home/home';
import Detail from './containers/detail/detail';
import Mime from './containers/mime/mime';
import Profile from './containers/profile/profile';
import Lyout from './components/lyout';
import store from './store/store.js';

ReactDOM.render(<Provider store={store}>
    <Reactr>
        <Lyout>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/mime' component={Mime}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/detail' component={Detail}/>
        </Switch>
        </Lyout>
    </Reactr>
</Provider>,window.root);