function groupByState(input){
    input = input.replace("\n\n\n\n\n\n\n\n\n\n", "\n");
    input = input.replace("\n\n\n\n\n\n\n\n\n", "\n");
    input = input.replace("\n\n\n\n\n\n\n\n", "\n");
    input = input.replace("\n\n\n\n\n\n\n", "\n");
    input = input.replace("\n\n\n\n\n\n", "\n");
    input = input.replace("\n\n\n\n\n", "\n");
    input = input.replace("\n\n\n\n", "\n");
    input = input.replace("\n\n\n", "\n");
    input = input.replace("\n\n", "\n");
    
    var result = new Object();
    var personas = input.split("\n");

    var  KL = [];
    var  WF = [];
    var  BR = [];
    var  HG = [];
    var  II = [];

    for(var i=0; i<personas.length; i++){
        var separarDatos = personas[i].split(",");

        separarDatos[0] = separarDatos[0].trim();
        separarDatos[1] = separarDatos[1].trim();
        separarDatos[2] = separarDatos[2].trim();

        objName = {'name':separarDatos[0]};
        objAddress = {'address':separarDatos[1]};
        objState = {'state':separarDatos[2]};

        objPerson = Object.assign({}, objName, objAddress, objState);
        switch(objState.state){
            case 'KL' : {
               KL.push(objPerson);
               break; 
            }
            case 'WF' : {
                WF.push(objPerson);
                break; 
            }
            case 'BR' : {
                BR.push(objPerson);
                break; 
            }
            case 'HG' : {
                HG.push(objPerson);
                break; 
            }
            case 'II' : {
                II.push(objPerson);
                break; 
            }
        }
    }

    var objIniKL = {'code':'KL', 'name':"King's Landing"};
    var objKL = Object.assign({}, objIniKL, KL); 

    var objIniWF = {'code':'WF', 'name':"Winter Felt"};
    var objWF = Object.assign({}, objIniWF, WF); 

    var objIniBR = {'code':'BR', 'name':"Bravos"};
    var objBR = Object.assign({}, objIniBR, BR);

    var objIniHG = {'code':'HG', 'name':"Highgarden"};
    var objBR = Object.assign({}, objIniHG, HG);

    var objIniII = {'code':'II', 'name':"Highgarden"};
    var objII = Object.assign({}, objIniII, II);
