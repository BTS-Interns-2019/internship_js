<<<<<<< HEAD
zip = '1233abc';
//zip = '22abc1d';
//zip = 'a2bc';
//zip = '3D2a5d2f';
//zip = '3d332f2a';
//zip = 'abcd';
//zip = '';
console.log(unzipString(zip));
=======
//zip = 'a2bc';
//zip = '3D2a5d2f';
//zip = '3d332f2a';
//zip = '';
//console.log(unzipString(zip));
>>>>>>> 840d7d3df05c3105bff5d379ac85ed60c34381f1

function unzipString(zip) {
    x = zip.split('');
    if (x.length==0) {
<<<<<<< HEAD
        unzip = "";
=======
        unzip = "''";
>>>>>>> 840d7d3df05c3105bff5d379ac85ed60c34381f1
    } else {
        unzip = '';
        y = false;
        for (i = 0; i < x.length; i++) {
            //y = false;
            if (Number(x[i])) {
                for (j = i+1; j < x.length; j++) {
                    if (Number(x[j])) {
                        break;
                    } else {
                        n = Number(x[i]);
                        unzip += x[j].repeat(n)
                        y = true;
                    }
                }
            }


            // if (y) {
            //     i+=1;
            // } else if (Number(x[i+1])) {
            //     continue;        
            // } else {
            //     unzip += x[i]
            // }

            if (y) {
                i+=1;
            } else if (!Number(x[i])) {
                unzip += x[i];             
            } else if (Number(x[i+1])) {
<<<<<<< HEAD
                continue;       
            }
=======
                unzip += x[i]
                continue;       
            }

            
>>>>>>> 840d7d3df05c3105bff5d379ac85ed60c34381f1
        }
    }
   
    return unzip
}

// console.log(unzip);
module.exports = unzipString;