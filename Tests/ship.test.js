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

test.only("isSunk() to return true if hitCount is equal to len of ship", () => {
    const aShip = ShipModule.createShip(1);
    expect(aShip.sunk).toBe(false);
    aShip.hit();
    expect(aShip.sunk).toBe(true);
})