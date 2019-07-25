//zip = '1233abc';
//console.log(unzipString(zip));

function unzipString(zip) {
    x = zip.split('');
    if (x.length==0) {
        unzip = "";
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
                        unzip += x[j].repeat(n);
                        y = true;
                    }
                }
            }

            if (y) {
                i+=1;
            } else if (!Number(x[i])) {
                unzip += x[i];             
            } else if (Number(x[i+1])) {
                continue;       
            }
        }
    }
    return unzip
}

module.exports = unzipString;