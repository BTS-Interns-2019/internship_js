function groupByState(input){
    const codigos=[['KL', 'King\'s Landing'],['WF',  'Winter Felt'],['BR','Braavos'],['HG','Highgarden'],['II','Iron Islands']];
    KL={'code' : codigos[0][0], 'address' : codigos[0][1], 'people' : [] }
    WF={'code' : codigos[1][0], 'address' : codigos[1][1], 'people' : [] };
    BR={'code' : codigos[2][0], 'address' : codigos[2][1], 'people' : [] };
    HG={'code' : codigos[3][0], 'address' : codigos[3][1], 'people' : [] };
    II={'code' : codigos[4][0], 'address' : codigos[4][1], 'people' : [] }

    estados={KL: KL, WF: WF, BR: BR, HG: HG, II: II};

    input=input.split("\n");
    input=input.filter(Boolean);
    input.forEach(dato => {        
        dato=dato.split(",");
        let individuo={
        'name' : dato[0].trim(),
        'address' : dato[1].trim(),
        'state' : dato[2].trim()
        }
        estados[individuo.state].people.push(individuo);
    });
    for (const key in estados) {
        if (estados.hasOwnProperty(key)) {
            const datos = estados[key];
            if (datos.people==0) {
                delete(estados[key]);
            }                  
        }
    }
    return estados;    
}
const input = `John Snow, 341 Kings Road, KL
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, KL`
groupByState(input);



module.exports = groupByState;