/**
 * apiutils
 */

 import "whatwg-fetch"

 const host_addr = 'http://123.56.14.172:8080/api'
 //const host_addr = 'http://localhost:8081/api'
 //const host_addr = 'http://10.235.134.61:8081/api'


export let getGoodsList = function(component){
  let response = fetch(host_addr + `/goods/list`, {
    method: 'post',
    mode:'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body:'{"type":1}'
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    if(json.code==10000){
        if(json.data){
          for (var i = 0; i < json.data.length; i++) {
            component.items.push(json.data[i]);
          }
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
        }
      }
    return json;
  });
}
