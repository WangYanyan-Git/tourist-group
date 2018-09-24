export function dropDown(curEle,callBack){
    let timer;
    curEle.addEventListener('scroll',()=>{
        if(timer){clearTimeout(timer)};
        timer=setTimeout(function(){
            let wH=curEle.clientHeight,
           sT=curEle.scrollHeight,
           trueH=wH+sT;
           if(wH+sT+20>trueH){
             callBack&&callBack();
           }
        },200)
        
    })
}
export function downRefresh(curEle,callBack){
    
     curEle.addEventListener('touchstart',touchStart);
 
     let start,topx,cuttop=curEle.offsetTop;

    function touchStart(e){
        start=e.touches[0].pageY;
        curEle.addEventListener('touchmove',touchMove);
        curEle.addEventListener('touchend',touchEnd);
    }

    function touchMove(e){
        let move=e.touches[0].pageY;
        
        if(move>start){
            topx=move-start;
          curEle.style.top=cuttop+topx+'px';
        }
    }

    function touchEnd(e){
        curEle.removeEventListener('touchmove',touchMove);
        curEle.removeEventListener('touchend',touchEnd);
        let timer=setInterval(function(){
            curEle.style.top=cuttop+(--topx)+'px';
            if(topx<1){
                curEle.style.top=cuttop+'px';
                clearInterval(timer);
            }
        },0)
        if(topx>50){
            callBack();
        }
    }
}