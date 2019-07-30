const charCounter = require('./am_iterators_homework_urbano');
test("Iterators test1= Hello", function () {
    expect(charCounter("Hello")).toEqual({h:1,e:1,l:2,o:1})
});
test("Iterators test1= Aabcdee", function () {
    expect(charCounter("Aabcdee")).toEqual({a:2,b:1,c:1,d:1, e:2})
});
test("Iterators test1= Urbano", function () {
    expect(charCounter("Urbano")).toEqual({u:1,r:1,b:1,a:1,n:1,o:1})
});