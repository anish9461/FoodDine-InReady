// export function PostData(type, userData) {
//     let BaseURL = 'https://apipaypal.9lessons.info/apipaypal/';
//     //let BaseURL = 'http://localhost/socialapi/';
    
//     return new Promise((resolve, reject) =>{
//     fetch(BaseURL+type, {
//         method: 'POST',
//         body: JSON.stringify(userData)
//     })
//     .then((response) => response.json())
//     .then((res) => {
//         resolve(res);
//     })
//     .catch((error) => {
//        reject(error);
//     });
    
//     });
//     }
import axios from "axios";
import { resolve } from "dns";
export function PostData(address, userData) {
    // console.log(userData.w3.ofa)
    let url = 'https://fooddinein--ready.herokuapp.com/'+address;
    console.log(userData)
    axios({
        method: 'POST',
        url: url,
        // headers: {}, 
        data: userData
      }).then(res => {
          console.log(res)
        // reso
    
      }).catch(err => {
        console.log("error")
        console.log(err)
      }
        );
    }