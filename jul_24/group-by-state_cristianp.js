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
    obj = new Object;
    for(i=0;i<line.length;i++){
        var x = line[5];
        var e = estado(line[5]);
        /*var ob = x: {
            code: line[5]
            people:[
            {
                name: line[0] + " " + line[1],
                address: line[2] + " " + line[3] + " " + line[4],
                state: line[5]
            }]
        };//*/
        /*ob.name = line[0] + " " + line[1];
        ob.address= line[2] + " " + line[3] + " " + line[4];
        ob.state = line[5];//*/

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