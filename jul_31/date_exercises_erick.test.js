const {
  jasonTimes,
  toLazyHuman
} = require("./date_exercises_erick")

/**---------------- Test for Jason ----------------------- */

test("Count Friday 13 and dates. Number as input", () =>{
  expect(jasonTimes(1982)).toEqual(
    {
      times: 1, dates: [ '08/13/1982' ]
    }
  )
});

test("Count Friday 13 and dates. String-year as input", () => {
  expect(jasonTimes("2014")).toEqual(
    {
      times: 1, 
      dates: [ '06/13/2014' ]
    }
  )
});

test("Count Friday 13  and dates. ISO String as input", () => {
  expect(jasonTimes("1998-13-20T03:23:27.000Z")).toEqual(
    {
      times: 3,
      dates: [ '02/13/1998', '03/13/1998', '011/13/1998' ]
    }
  )
});

/**------------------- Test toLazyHuman ------------------------ */

test("on Year priority", () => {
  const date1 = "2027-07-31T12:00:30.000" 
  const date2 = "2000-07-31T12:00:00.000"
  expect(toLazyHuman(date1, date2)).toBe("in less than 30 years")
});

test("on Day prioprity", () => {
  const date1 = "1992-04-11T15:20:00.000"
  const date2 = "1992-04-29T15:20:00.000"
  expect(toLazyHuman(date1, date2)).toBe("less than 20 days ago")
});

test("on Seconds priority", () => {
  const date1 = "1992-04-11T15:20:26.000"
  const date2 = "1992-04-11T15:20:50.000"
  expect(toLazyHuman(date1, date2)).toBe("more than 20 seconds ago")
})

