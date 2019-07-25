function groupByState(input){
    const estados=[[false, 'kL', 'King\'s Landing'],[false, 'WF',  'Winter Felt'],[false, 'BR','Braavos'],[false, 'HG','Highgarden'],[false, 'II','Iron Islands']];
    input=input.split("\n");
    input=input.filter(Boolean);
    const salida={};
    input.forEach(element => {
        element=element.split(", ");
        salida['KL'].people='holis';
    });           
}
const input = `John Snow, 341 Kings Road, KL
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, KL`
groupByState(input);



module.exports = groupByState;