/** 
 * @param paramsValue 外部调用函数时then中返回的res的值
 * 
 **/
export async function promiseThen(){
  var paramsValue = null;
  await new Promise((resolve)=>{ 
    console.log("KKKKKKKKKK")
    setTimeout(()=>{
      console.log("RESOLVE");
      paramsValue = '这是then(res)中返回的res的值'
      resolve();
    },1000);
  }) 
  return Promise.resolve(paramsValue);
  
}