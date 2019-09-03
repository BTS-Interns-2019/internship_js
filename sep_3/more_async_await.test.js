const findHero = require('../sep_3/superheroes_edgarp.js');


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
