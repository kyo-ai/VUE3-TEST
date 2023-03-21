/** 
 * @param paramsValue 外部调用函数时then中返回的res的值
 * 
 **/
export async function promiseThen(){
  var paramsValue = null;
  await new Promise((resolve)=>{ 
    console.log("Promise中同步的值")
    setTimeout(()=>{
      console.log("Promise中异步函数中的值");
      paramsValue = '这是返回给.then(res)中res的值'
      resolve();
    },1000);
  }) 
  return Promise.resolve(paramsValue);
}

//增加async与await，可使Promise内部函数执行完，避免内部出现较为耗时的异步时.then中接收不到res结果的情况发生
/* export function promiseThen(){
  var paramsValue = null;
  new Promise((resolve)=>{ 
    console.log("KKKKKKKKKK")
    setTimeout(()=>{
      console.log("RESOLVE");
      paramsValue = '这是then(res)中返回的res的值'
      resolve();
    },1000);
  }) 
  return Promise.resolve(paramsValue);
  
} */