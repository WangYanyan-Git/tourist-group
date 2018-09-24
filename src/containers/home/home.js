import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import HomeHeader from './homeHeader/homeHeader';
import './home.less';
import HomeSwipe  from './homeSwipe/homeSwipe';
import HomeMainList from './homeMainList/homeMainList';
import action from '../../store/action/action';
import {dropDown,downRefresh} from  '../../utils/utils';

 class Home extends React.Component{
 
    componentDidMount(){
      
          this.props.getSliders();
          this.props.getMainList();
          dropDown(this.maincontent,this.props.getMainList);
          downRefresh(this.maincontent,this.props.getMainList);
    }
    
    render(){
   
        let {changeCurrentCategory,currentCategory,sliders,mainList,getMainList} =this.props;
        
        return (<Fragment>
            <HomeHeader getMainList={getMainList} changeCurrentCategory={changeCurrentCategory} currentCategory={currentCategory}/>
              
            <div className='main-content' ref={ref=>this.maincontent=ref}>
              <HomeSwipe sliders={sliders}/>
              <HomeMainList mainList={mainList} ></HomeMainList>
            </div>
         
            </Fragment>);
    }
}

export default connect(state=>state.home,action.home)(Home);

