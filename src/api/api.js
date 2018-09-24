
const HOST='http://localhost:3000';
export function get(url){
   return fetch(HOST+url).then(response=>response.json());//把响应体换成json对象
}

export function post(url,data){
    return fetch(HOST+url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",//告诉服务器请求体的类型是json
            "Accept":"application/json"//告诉 服务器我客户端想接收json
        },
        body:JSON.stringify(data)
    }).then(response=>response.json());
}