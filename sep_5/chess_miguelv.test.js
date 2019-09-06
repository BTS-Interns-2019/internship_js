const {moveWhite, moveBlack}=require("./chess_miguelv.js")
describe(("Tests"),()=>{
    test("Test 1, Pawn Move", async()=>{
        const firstmove = await moveWhite("G2","G4");
        expect(firstmove.currentLocation).toBe("G4");
    });

    test("Test 2, Pawn Invalid Move", async()=>{
        const secondmove = await moveBlack("G3","G2");
        expect(secondmove).toBe("There is no piece in the selected G3 cell");
    });

    test("Test 3, Pawn Invalid Move 2", async()=>{
        const thirdmove = await moveBlack("A2","A3");
        expect(thirdmove).toBe("The piece at A2 is not black");
    });
    test("Test 4, Pawn Invalid Move 3", async()=>{
        const fourthmove = await moveBlack("G7","G8");
        expect(fourthmove).toBe("The piece bP cannot be moved to G8");
    });
    test("Test 5, Rook move", async()=>{
        const fifthmove = await moveBlack("A8","A5");
        expect(fifthmove.currentLocation).toBe("A5");
    });
    test("Test 6, Queen move", async()=>{
        const sixthmove = await moveWhite("D1","B3");
        expect(sixthmove.currentLocation).toBe("B3");
    });
})