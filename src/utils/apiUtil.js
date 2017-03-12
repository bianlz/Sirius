/**
 * apiutils
 */

 import "whatwg-fetch"

 const host_addr = 'http://123.56.14.172:8080/virgo/api'


export let getGoodsList = async () => {
  let response = await fetch(host_addr + `/goods/list`, {
    method: 'post',
    mode:'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body:''
  }).catch((error) => {
    console.log("error:"+error)
  })
  return await response.json().then(function(data) {
  			return data;
		}).catch((error) => {
    		console.log("error json:"+error)
  		});
}
