let group=require('./group-by-state_emmanuelr.js');

const input0=`John Snow, 341 Kings Road, KL\nArya Stark, 22 No Where St, WF\nJaime Lannister, 73 1st Street, KL`;
const output0={
    "KL": {
        "address": "King's Landing", 
        "code": "KL", 
        "people": [
            {
                "address": "341 Kings Road", 
                "name": "John Snow", 
                "state": "KL"
            },
            {
                "address": "73 1st Street", 
                "name": "Jaime Lannister", 
                "state": "KL"
            }
        ]
    }, 
    "WF": {
        "address": "Winter Felt", 
        "code": "WF", 
        "people": [
            {
                "address": "22 No Where St", 
                "name": "Arya Stark", 
                "state": "WF"
            }
        ]
    }
}
test('prueba del ejemplo', function(){
    expect(group(input0)).toEqual(output0);
});

input1=`\nJohn Snow, 341 Kings Road, KL\n\n\nArya Stark, 22 No Where St, WF\nJaime Lannister, 73 1st Street, KL`;
test("Prueba con espacios en blanco", function(){
     expect(group(input1)).toEqual(output0);
})

input2=`Arya Stark, 22 No Where St, WF\nJaime Lannister, 73 1st Street, KL\nJuan Escutia, su casa verde, BR
Personaje2, dirección número dos, HG\n UltimoPJ, la ultima casita, II`;
output2 = {
    "BR": {
        "address": "Braavos",
        "code": "BR",
        "people": [{
            "address": "su casa verde",
            "name": "Juan Escutia",
            "state": "BR"
        }]
    },
    "HG": {
        "address": "Highgarden",
        "code": "HG",
        "people": [{
            "address": "dirección número dos",
            "name": "Personaje2",
            "state": "HG"
        }]
    },
    "II": {
        "address": "Iron Islands",
        "code": "II",
        "people": [{
            "address": "la ultima casita",
            "name": "UltimoPJ",
            "state": "II"
        }]
    },
    "KL": {
        "address": "King's Landing",
        "code": "KL",
        "people": [{
            "address": "73 1st Street",
            "name": "Jaime Lannister",
            "state": "KL"
        }]
    },
    "WF": {
        "address": "Winter Felt",
        "code": "WF",
        "people": [{
            "address": "22 No Where St",
            "name": "Arya Stark",
            "state": "WF"
        }]
    }
};
test("Uno de cada estado", function(){
    expect(group(input2)).toEqual(output2);
})

input3=`John Snow, 341 Kings Road, WF
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, WF
Juan Escutia, su casa verde, WF
Personaje2, dirección número dos, WF
UltimoPJ, la ultima casita, WF`;
output3={
    "WF": {
        "address": "Winter Felt",
        "code": "WF",
        "people": [{
            "address": "341 Kings Road",
            "name": "John Snow",
            "state": "WF"
        }, {
            "address": "22 No Where St",
            "name": "Arya Stark",
            "state": "WF"
        }, {
            "address": "73 1st Street",
            "name": "Jaime Lannister",
            "state": "WF"
        }, {
            "address": "su casa verde",
            "name": "Juan Escutia",
            "state": "WF"
        }, {
            "address": "dirección número dos",
            "name": "Personaje2",
            "state": "WF"
        }, {
            "address": "la ultima casita",
            "name": "UltimoPJ",
            "state": "WF"
        }]
    }
}
test("todos de un reino", function(){
    expect(group(input3)).toEqual(output3);
})