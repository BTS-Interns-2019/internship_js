function groupByState(input){
    const estados=[[ 'kL', 'King\'s Landing'],['WF',  'Winter Felt'],['BR','Braavos'],['HG','Highgarden'],['II','Iron Islands']];
    input=input.split("\n");
    input=input.filter(Boolean);
    

}
const input = `John Snow, 341 Kings Road, KL
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, KL`
groupByState(input);



module.exports = groupByState;