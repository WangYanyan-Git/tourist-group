import * as types from '../action-type';
import {getSliders,getMainList} from '../../api/home';
 let home={
    changeCurrentCategory(type){
       // console.log(type);
        return {type:types.HOME_CHANG_LIST,payload:type}
    },
    getSliders(){
        return function(dispatch,getState){
            //调用后台接口，得到返回值，再派发真正action
            getSliders().then(sliders=>{
                dispatch({
                    type:types.HOME_SWIPE_LIST,
                    payload:sliders
                });
            });
        }
    },
    getMainList(){
        return function(dispatch,getState){
           console.log(getState().home);
           let {num,linmt}=getState().home.mainList,
               {currentCategory}=getState().home;
               let  type=currentCategory;
              
            getMainList(type,num,linmt).then(mainList=>{
                dispatch({
                    type:types.HOME_MAIN_LIST,
                    payload:mainList
                });
            })
        }
    }

    
}
export default home;