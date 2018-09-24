import React from 'react';
import ReactSwipe from 'react-swipe';
import './homeSwipe.less';

export default class HomeHeader extends React.Component{
    state = {
        index:0
    }
   render(){
    let swipeOptions = {
        continuous:true, //启用无缝轮播
        callback:(index)=>{//每次轮播图切换一次，就会调用一次回调函数，参数就是新的索引
            this.setState({index});
        }
    }
       let {sliders}=this.props;

       return ( <div className="home-swipe">
           
                 {sliders.length>0?<ReactSwipe className="carousel" swipeOptions = {swipeOptions}>
                    {
                        sliders.map((item,index)=>(
                            <div key={index}>
                                <img src={item} alt={item}/>
                            </div>
                        ))
                    }
                    </ReactSwipe>:null}

                    <div className='navdoc'>
                     {
                          sliders.map((item,index)=>(
                            <span key={index} className={this.state.index==index?'on':null} ></span>
                        ))
                     }
                    </div>
       </div>)
   }
}

