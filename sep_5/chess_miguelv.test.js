const {moveWhite, moveBlack}=require("./chess_miguelv.js")
describe(("Pawn tests"),()=>{
    test("Test 1", async()=>{
        const firstmove = await moveWhite("G2","G4");
        expect(firstmove).toBe(true);
    })
})