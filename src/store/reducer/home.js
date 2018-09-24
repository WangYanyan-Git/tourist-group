import * as types from '../action-type';
let initState={
    currentCategory:'all',
    sliders:[],//存放轮播图数据,
    mainList:{
       num:0,
       list:[],
       linmt:5
    }
}
export default function(state=initState,action){
  
    state=JSON.parse(JSON.stringify(state));
                  
    switch(action.type){
        case types.HOME_CHANG_LIST:return {...state,currentCategory:action.payload}; break;
        case types.HOME_SWIPE_LIST:return{...state,sliders:action.payload};break;
        case types.HOME_MAIN_LIST:return {...state,mainList:{
            ...state.mainList,
            list:action.payload,
            linmt:state.mainList.linmt+state.mainList.list.length
        }}; break;        


        default: return state;   
    }
  
}
 