/**
 * apiutils
 */

 import "whatwg-fetch"

 const host_addr = 'http://123.56.14.172:8080/virgo/api'


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
        for (var i = 0; i < 50; i++) {
          component.items.push(json.data[1]);
        }
        if(component.$refs.my_scroller){
          component.$refs.my_scroller.finishInfinite(true)
          //component.$refs.my_scroller.resize();
        }
      }
    return json;
  });
}
