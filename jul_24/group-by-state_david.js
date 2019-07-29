// function groupByState() {

// }
const input = `John Snow, 341 Kings Road, KL
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, KL`

a = [];
b = input.split(/\n/);
//console.log(b);
for (i = 0; i < b.length; i++) {
    a[i] = b[i].split(',');   
}
console.log(a);

name = [];
address = [];
state = [];
for (i = 0; i < a.length; i++) {
    name[i] = a[i][0];
    address[i] = a[i][1];
    state[i] = a[i][2];
}
// console.log(name);
// console.log(address);
// console.log(state);

var output = new Object();
for (i = 0; i < state.length; i++) {
    output[state[i]] = {};
}

console.log(output);

// }
//module.exports = groupByState;