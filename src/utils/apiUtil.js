/**
 * apiutils
 */

 import "whatwg-fetch"

 const host_addr = 'http://123.56.14.172:8888/api'


export let getGoodsList = function(component){
  let response = fetch(host_addr + `/goods/list`, {
    method: 'post',
    mode:'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body:''
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    if(json.code==10000){
        if(json.data){
          for (var i = 0; i < json.data.length; i++) {
            component.items.push(json.data[1]);
          }
        }
        if(component.$refs.my_scroller){
          component.$refs.my_scroller.finishInfinite(true)
          //component.$refs.my_scroller.resize();
        }
      }
    return json;
  });
}

export let getFocusList = function(component){
  let response = fetch(host_addr + `/focus/list`, {
    method: 'get',
    mode:'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    if(json.code==10000){
        if(json.data){
          for (var i = 0; i < json.data.length; i++) {
            component.items.push(json.data[i]);
          }
          console.log(component.items.length);
        }
      }
    return json;
  });
}
