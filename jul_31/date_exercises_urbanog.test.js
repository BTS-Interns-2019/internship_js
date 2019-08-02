const{
    jsonTimes,
    toLazyHuman,
} = require('../jul_31/date_exercises_urbanog');

    test("Jason is comming", ()=>{
        expect(jsonTimes("2011").dates).toEqual([
            '05/13/2011'
        ]);
    });
    let jsonComming=1;
    let date= new Date(2012,0)
    const times=3;
    test("Json times in 2012",()=>{
        expect(jsonTimes(date).times).toEqual(times);
    })

    test("More than 1 day ago", ()=>{
        expect(toLazyHuman("2019-07-31T12:00:00.000")).toBe("more than 1 day ago");
    });
    test("In more than one year", ()=>{
        expect(toLazyHuman("2020-09-31T12:01:00.000")).toBe("in more than 1 year");
    });