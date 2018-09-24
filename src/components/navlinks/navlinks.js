import React from 'react';
import {withRouter} from 'react-router-dom';
import './navlinks.less';
 class NavLink extends React.Component{
    render(){
        return (<div className='navlink'><i onClick={()=>{this.props.history.goBack()}}>返回</i>{this.props.title}</div>)
    }
}

export default withRouter(NavLink);







