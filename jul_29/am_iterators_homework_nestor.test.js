const charCounter = require('./am_iterators_homework_nestor');

const p1 = { c: 2, o: 4, n: 2, t: 1, r: 4, a: 2, e: 1, v: 1, l: 1, u: 1, i: 2, s: 1 };
const p2 = { c: 2, i: 2, l: 1, o: 4, p: 2, e: 4, n: 5, t: 2, a: 2, r: 3, h: 1, d: 1, f: 1 };
const p3 = { t: 2, r: 1, a: 3, n: 3, s: 2, u: 1, b: 1, c: 2, i: 2, o: 1 };

test("Con-tra-rre-vo-lu-cio-na-rios", function(){
    expect(charCounter("Con-tra-rre-vo-lu-cio-na-rios")).toStrictEqual(p1);
});
test("Ciclopentanoperhidrofenantreno", function(){
    expect(charCounter("Ciclopentanoperhidrofenantreno")).toStrictEqual(p2);
});
test("´!}+<Tran  ,subs . tan - cia_cion+}-+", function(){
    expect(charCounter("´!}+<Tran  ,subs . tan - cia_cion+}-+")).toStrictEqual(p3);
});