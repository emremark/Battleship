import { ShipModule } from '../src/ship';

test("hit() function to increase hitCount on ship by 1", () =>{
    const aShip = ShipModule.createShip(3);
    expect(aShip.hitCount).toBe(0);
    aShip.hit();
    expect(aShip.hitCount).toBe(1);
})

test("createShip(len) to return a ship object", () => {
    const aShip = ShipModule.createShip(3);
    expect(aShip).toMatchObject({
        shipLen: 3,
        hitCount: 0,
        sunk: false
    })
})