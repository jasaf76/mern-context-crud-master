// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export const createNfTRequest = async () => {

//   const data = new FormData();
//   const randomNum = Math.floor(Math.random() * 1000);
//   for (let key in nfts) {
//     data.append(key, nfts[key]);
//   }
//  changeState()
//   return await axios
//     .post(
//       "http://localhost:3033/api/v1/nfts",
//       { data },
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         body: JSON.stringify({
//           name: `test ${randomNum}`,
//           description: `test ${nfts.description}`,
//         }),
//       }
//     )
//     .then(
//       function (res) {
//         console.log(res);
//       },
//       console.log(nfts),
//       console.log(data)
//     );
// };
import axios from "axios";
import React, { useEffect, useState } from "react";

export const createNfTRequest = async (nfts,res,req) => {
  const data = new FormData();
  const randomNum = Math.floor(Math.random() * 1000);

  
  for (let key in nfts) {
    data.append(key, nfts[key]);
  }
  // const nfts = nfts && nfts.length ? nfts[0].name : 'Lloadsifahjadsoifj..........'
  // console.log(nfts)
  await axios.post("http://localhost:3033/api/v1/nfts",(data) , {
    nfts: {
      nfts:req &&  req.body
    },
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: JSON.stringify({
      name: `test ${randomNum}`,
    }),
  });
};
