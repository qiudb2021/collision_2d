function testDiv() {
    for (let i = 0; i < 10; i++) {
        let result;
        let count = 1000*1000*10000
        console.time("div")
        let floor = Math.floor
        while(count--) {
            // result = parseInt(11 / 2);
            result = floor(11/2)
            // result = 11 / 2;

        }
        console.timeEnd("div")
    }
}

testDiv(1000)

function testBit() {
    for (let i = 0; i < 10; i++) {
        let result;
        let count = 1000*1000*10000
        console.time("bit")
        while(count--) {
            result = 11 >> 1;
        }
        console.timeEnd("bit")
    }
}
// testBit()

function testConcat() {
    return;
}