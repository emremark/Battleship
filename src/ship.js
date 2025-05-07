export const ShipModule = (function () {
    
    class Ship {
        constructor(shipLen) {
            this.shipLen = shipLen;
            this.hitCount = 0;
            this.sunk = false;
        }
        hit() {
            this.hitCount += 1;
        }
    }

    function createShip(len) {
        return new Ship(len);
    }

    return { createShip };
})();

