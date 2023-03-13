/**
 * 
 * @param paramsNmae url中要查询的参数名
 *
**/
//获取URL中指定参数的参数内容数据,如为vue，vue中的query参数，params参数无法获取
export function getUrlParams(paramsNmae){
  const URL_Str = window.location.href;
  const URL_DO = new URL(URL_Str);
  return URL_DO.searchParams.get(paramsNmae)
}