const unzipString = require("./unzip-string_cristianpl.js");

test("Prueva con 2a3c5l", function(){
    expect(unzipString("2a3c5l")).toBe("aaccclllll");
})

test("Prueva con t6f1hj", function(){
    expect(unzipString("t6f1hj")).toBe("tffffffhj");
})

test("Prueva con 321a5c3p", function(){
    expect(unzipString("321a5c3p")).toBe("acccccppp");
})

test("Prueva con 897dfc3a2", function(){
    expect(unzipString("897dfc3a2")).toBe("dddddddfffffffcccccccaaa");
});
