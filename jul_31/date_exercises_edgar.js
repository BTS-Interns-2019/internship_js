function JsonTimes (param) {
           let year;
       switch (typeof (param)){
           case "number":
               year = param;
               break;
            case "string":
                if (param.length == 4){
                    year = parseInt(param);
                } else {
                       let par = param.split("")
                    year = par[0];
                }
                break;
            case "object":
                    year = object.getFullYear();
                break;
       }


    }
    



param = 2019;
console.log(JsonTimes (param))
