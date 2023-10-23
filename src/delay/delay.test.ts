import { delay } from "./delay"


describe("delay", () => {
  test('sum', async () => { 
    const sum = await delay(1000, () => 5+5) 
    expect(sum).toBe(10)
   })
})