export const ShipModule = (function () {
    
    class Ship {
        constructor(shipLen) {
            this.shipLen = shipLen;
            this.hitCount = 0;
            this.sunk = false;
        }
        hit() {
            this.hitCount += 1;
            if (this.isSunk()) {this.sunk = true};
        }
        isSunk() {
            if(this.hitCount === this.shipLen) {
                return true;
            }
        }
    }

    function createShip(len) {
        return new Ship(len);
    }

    return { createShip };
})();

