import React from 'react';
import './homeHeader.less';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
export default class HomeHeader extends React.Component{
    state={
        listShow:false
    }
    hankChange(e){
       let type=e.target.dataset.type;
          this.props.changeCurrentCategory(type);
     //   console.log(this.props);
       this.props.getMainList();
       this.setState({listShow:false});
       
    }
    render(){
        let {listShow}=this.state;
         let {currentCategory}=this.props;
        
       //  console.log(typeof this.props.getMainList);
        let headlist=( <CSSTransition timeout={150} classNames="fade">
                     <div className='headlist'>
                        <ul  onClick={e=>this.hankChange(e)}>
                        
                            <li data-type='vue'className={currentCategory=='vue'?'active':''}>123</li>
                            <li data-type='react'className={currentCategory=='react'?'active':''}>456</li>
                        </ul>
                        </div></CSSTransition>);
                        
        return (<div  className='header-tabs'>
                <div className='header-bar'>
                    <span className='logo'></span>
                    <div className='header-icon' onClick={()=>{this.setState({listShow:!listShow})}}>
                        {listShow?<i className='iconfoot icon-uili'>1</i>
                        :<i className='iconfoot icon-guanbi'>2</i>}
                    </div>
                </div>
                <TransitionGroup>
                { listShow&&headlist}
                </TransitionGroup>
        </div>);
    }
}

