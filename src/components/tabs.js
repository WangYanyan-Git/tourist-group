import React from 'react';
import { NavLink,Link} from 'react-router-dom';
import './tabs.less';
export default class Tabs extends React.Component{
    render(){
        return (<nav className='navlist'>
            <div className='list'>
              <p>用户管理</p>
               <ul>
                   <li><Link to='/user'>用户列表</Link></li>
                    <li><Link to='/adduser'>增加用户</Link></li>
               </ul>
            </div>
            <div className='list'>
              <p><Link to='/trave'>行程库</Link></p>
            </div>
            <div className='list'>
              <p>团管理</p>
               <ul>
                   <li><Link to='/regiment'>用户列表</Link></li>
                    <li><Link to='/regiment'>增加用户</Link></li>
               </ul>
            </div>
        </nav>);
    }
}