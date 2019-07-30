function unzipString(str) {
    str.split("");
    let counter= 1;
    let response= "";
    for (let i = 0; i < str.length; i++) {


       if (!isNaN(parseInt(str[i]))){
           counter= str[i];
           // console.log(counter)
       }else {
           for (let j = 0; j <counter ; j++) {
               response += str[i];
               // console.log(response);
           }
       }
    }
    return response;
}
// console.log(unzipString("3d332f2a"));

module.exports = unzipString;

