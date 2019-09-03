const { get, post } = require('./function.js');
// const publiKey = '9b04d37e84bdf94e5610a5caa34dd978';
// const privateKey = '4f6177742eead504e4b74f182f8cee38d9a2ba5c';
// async function findHero(hero){
//   const hash =  'C2EA1985191BF9EBC56E3DBF95619284'
//   const url = `https://gateway.marvel.com:443/v1/public/characters?name=${hero}&ts=1&apikey=9b04d37e84bdf94e5610a5caa34dd978&hash=${hash}`;
//   get(url)
// }
function findHero(hero) {
  const hash =  'c2ea1985191bf9ebc56e3dbf95619284'
  const url = `https://gateway.marvel.com:443/v1/public/characters?name=${hero}&ts=1&apikey=9b04d37e84bdf94e5610a5caa34dd978&hash=${hash}`;
  return new Promise((resolve, reject) => {
  get(url, resolve, reject);
  });  
}

describe('Find Super heroes', () => {

  test('Spider-Man', async () => {

    const spiderman = await findHero('Spider-man');
    // original -> "http://marvel.com/universe/Spider-Man_(Peter_Parker)?utm_campaign=apiRef&utm_source=a736913c879d22d50f62b4f286ca23bd"
    // remove traking keys from url

    expect(spiderman.wiki).toBe("http://marvel.com/universe/Spider-Man_(Peter_Parker)");
  });

  test('Thor', () => {

    expect.assertions(1)

    return findHero('Thor')
      .then(thor => {
        expect(thor.description).toBe("As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.");
      })
  });
});

describe('Find Series', () => {
  test('Avengers', async () => {
    const avengers = await findSeries('Avengers', { startYear: 2016 });

    expect(avengers.title).toBe('Avengers (2016 - 2018)')
    expect(avengers.characters.deadpool.comics.first.issueNumber).toBe(1)
    expect(avengers.characters.deadpool.comics.first.title).toBe("Deadpool: Back in Black (2016) #1")
  })
})
