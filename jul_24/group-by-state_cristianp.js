//Function goupByState;
//Object have: a property content state
//state have: code, name, and people{}
//people have: name address adn state;

function groupByState(line){
    line = line.replace(/\n/g, " ");
    //dividir por comas
    line = line.replace(/,/g, " ");
    line = line.split(" ");
    line = line.filter(Boolean);
    todo = {};
    for(i=0;i<line.length;i++){
        var x = line[5];
        var e = estado(line[5]);
        obj = new Object;
        
        var nombre = line[0] + " " + line[1];
        var dir= line[2] + " " + line[3] + " " + line[4];
        var sta = line[5];//*/
        var persona = {
            name: nombre,
            address: dir,
            state: sta
        }
        var antes = Object.getOwnPropertyNames(todo);
        if(antes.indexOf())
        i+=6;
        console.log("ciclado");
    }
    //primero 2 nombre
    //3ro direccion
    //5 estado

    console.log(line);
}

function estado(abrev){
    switch(abrev){
        case "AL":
            return "Alabama";
        case "AK":
            return "Alabama";
        case "AZ":
            return "Arizona";
        case "AR":
            return "Arkansas";
        case "CA":
            return "California";
        case"CO":
            return "Colorado";
        case"CT":
            return "Connecticut ";
        case"DE":
            return "Delaware";
        case"DC":
            return "Distrito de Columbia";
        case"FL":
            return "Georgia";
        case"GA":
            return "Georgia";
    }
}

groupByState(`John Snow, 341 Kings Road, KL
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, KL`);