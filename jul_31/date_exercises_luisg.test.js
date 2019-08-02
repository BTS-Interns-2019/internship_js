const {jsonTimes,toLazyHuman} = require("./date_exercises_luisg.js")

/*test('Numero', () => {
    expect(jsonTimes(2018)).toStrictEqual({ times: 2, dates: ['04/13/2018', '07/13/2018'] }
    );
})

test('String', () => {
    expect(jsonTimes("2018")).toStrictEqual({ times: 2, dates: ['04/13/2018', '07/13/2018'] }
    );
})

test('ISO', () => {
    expect(jsonTimes("2018-01")).toStrictEqual({ times: 2, dates: ['04/13/2018', '07/13/2018'] }
    );
})

test('Date', () => {
    expect(jsonTimes(new Date(2018,0))).toStrictEqual({ times: 2, dates: ['04/13/2018', '07/13/2018'] }
    );
})*/

test('Date 1', () => {
    expect(toLazyHuman(new Date("2019-07-31T12:00:00.000"),new Date("2019-07-31T12:01:00.000"))).toBe("1 minute ago");
})

test('Date 2', () => {
    expect(toLazyHuman(new Date("2019-07-31T12:00:00.000"),new Date("2019-07-31T12:01:00.100"))).toBe("more than 1 minute ago");
})

test('Date 3', () => {
    expect(toLazyHuman(new Date("2019-07-31T12:00:00.000"),new Date("2019-07-31T12:04:00.100"))).toBe("less than 5 minutes ago");
})

test('Date 4', () => {
    expect(toLazyHuman(new Date("2019-07-31T12:04:00.000"),new Date("2019-07-31T12:00:00.000"))).toBe("in less than 5 minutes");
})

test('Date 5', () => {
    expect(toLazyHuman(new Date("2018-08-31T12:04:00.000"),new Date("2019-07-31T12:00:00.000"))).toBe("less than 1 year ago");
})