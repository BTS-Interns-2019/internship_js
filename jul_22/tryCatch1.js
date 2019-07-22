function pass(password){
try {
    if (password.length < 5 ){
        throw "SHORT";
    }else if (password.length > 10){
        throw "LONG";
    }
    console.log("alert validated!");
} catch(e){
    switch (e) {
        case 'SHORT' : console.log("not enough characters");
        break;
        case 'LONG' : console.log("too many characters");
        break;
        default : console.log("all good");
    }
    //console.log("everything right");
}

}

var password = "123467";

pass(password);