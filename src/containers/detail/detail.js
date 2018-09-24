import React from  'react';
import {Redirect} from 'react-router-dom';
import NavLink from '../../components/navlinks/navlinks';
export default class Detail extends React.Component{
    render(){
        let {poster,title,price} = this.props.location.state;
     
        return (<div className='detail'>
          <NavLink title='课程详情' />
            <img src={poster}/>
            <p>{title}</p>
            <p>价钱：{price}</p>
        </div>)
    }
}
