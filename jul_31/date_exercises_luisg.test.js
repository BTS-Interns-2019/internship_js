const jsonTimes = require("./date_exercises_luisg.js")

test('Numero', () => {
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
})