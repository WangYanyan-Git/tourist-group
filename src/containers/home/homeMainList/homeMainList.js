import React from 'react';
import {Link} from 'react-router-dom';
import './HomeMainList.less';
export default class HomeMainList extends React.Component{
   
    render(){
        let {list}=this.props.mainList;
      
        return (<div className='maindiv'>
               <p className='hott'>热门课程</p>
                {list.length>0?list.map((item,index)=>{
                    {index}
                    return (<Link  to={{pathname:'/detail',state:item}} className='divlist'  key={index}>
                    <img src={item.poster} />
                    <p>名称：{item.title}</p>
                   
                    </Link>)
                    }):null}                                                                                                                                                       */}
            </div>)
    }
}
