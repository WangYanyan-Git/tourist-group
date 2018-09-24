import {get,post} from './api.js';

export function getSliders(){
       return get('/getSliders');
}

export function getMainList(type,num,linmt){
    return get(`/getMainList/${type}?linmt=${linmt}&num=${num}`);
  //  return get(`/lessons/${currentCategory}?offset=${offset}&limit=${limit}`);
}