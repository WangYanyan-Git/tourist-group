import React from 'react';
import './tabs.less';
import {NavLink} from 'react-router-dom';
export default class Tab extends React.Component{
    render(){
        return (<nav className='tabs'>
          <NavLink to='/home' activeClassName='active'>
          <i className='iconfont icon-xingqiu'></i>
          <span>首页</span>
          </NavLink>
          <NavLink to='/mime' activeClassName='active'>
          <i className='iconfont icon-xingqiu'></i>
          <span>我的</span></NavLink>
          <NavLink to='/profile' activeClassName='active'>
          <i className='iconfont icon-xingqiu'></i>
          <span>我的</span></NavLink>
        </nav>);
    }
}

