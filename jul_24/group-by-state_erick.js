const input = `John Snow, 341 Kings Road, KL
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, KL`

function groupByState(input){
  const persons = input.split("\n")
  const kingdom = {}
  const people = []
  const states = [{code: "KL", name: "King's Landing"},
                {code: "WF", name: "Winter Felt"},
                {code: "BR", name: "Braavos"},
                {code: "HG", name:"Highgarden"},
                {code: "II", name: "Iron Islands"}]
  /**-------------------------------Objectes persons---------------------------- */
  for(let data = 0, x = 0; data < persons.length; data++){
    people.push({})
    let hero = persons[data].split(", ")
    people[data].name = hero[x];
    people[data].address = hero[x+1];
    people[data].state = hero[x+2];
  }
  // console.log(people)
  //**-----------------------Countries set in Kingdom register----------------------- */
  for(let hero = 0; hero < people.length; hero++){
    for(let st = 0; st < states.length; st++){
    if(states[st].code === people[hero].state){
        kingdom[people[hero].state] = states[st]
        kingdom[people[hero].state].people = []
      }
    }
  }
  /**----------------------Final stage - Set people to States register---------------------- */
  people.forEach((v,i,arr) => v.state === kingdom[v.state].code ? kingdom[v.state].people.push(v) : v)
  
  return kingdom
}
console.log(typeof typeof groupByState(input))

module.exports = groupByState;