const input = `John Snow, 341 Kings Road, KL
Arya Stark, 22 No Where St, WF
Jaime Lannister, 73 1st Street, KL`

function groupByState(input){
  const persons = input.split("\n")
  const kingdom = {}
  const people = []
  let states = [{code: "KL", name: "King's Landing"},
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
  //**-----------------------Countries in Arr and Property States----------------------- */
  let countries = []
  for(let c = 0; c < persons.length; c++){
    let state = people[c].state
    countries.push(state)
  }//console.log(people)
  for(let i = 0; i < countries.length; i++){
    kingdom[countries[i]] = {code: countries[i]}
  }
  
  console.log(kingdom)
  console.log(people)
  /**-----------------------------Final stage---------------------------------------- */
}
groupByState(input)