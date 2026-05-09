import subtract from "./subtract";
import sum from "./sum";


describe("Tests for sum function",() => {

test('adds 2 + 2 to equal 4', () => { 
    expect(sum(2,2)).toBe(4);
 })

 test('subtracts 10 - 2 to 8',() => {
    expect(subtract(10,2)).toBe(8)
 })
})
