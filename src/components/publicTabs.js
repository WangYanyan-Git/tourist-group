import React,{Fragment} from 'react';
import  {Provider} from 'react-redux';
import Tabs from './tabs';
import './tabs.less';
import store from '../store/store';
export default class PublicTabs extends React.Component{
    render(){
        return (
            <Provider store={store}>
             <Fragment >
                 <div className='logoname'>旅游团管理系统</div>
             <div className='mian'>
               {this.props.children}
             </div>
            
              <Tabs/>
              </Fragment>
           
         
       
        </Provider>
        );
    }
}