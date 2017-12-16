const coincap = require('../src');

describe('/coins', () => {

    test('loads', () => {
        coincap.getCoins().then(result => {
            expect(result.result).toBeTruthy();
            expect(result.statusCode).toBe(200);
            expect(result.data.length).toBeGreaterThan(0);
        });
    });

});

describe('/map', () => {
    
    test('loads', () => {
        coincap.map().then(result => {
            expect(result.result).toBeTruthy();
            expect(result.statusCode).toBe(200);
            expect(result.data.length).toBeGreaterThan(0);
        });
    });

});

describe('/front', () => {
    
    test('loads', () => {
        coincap.front().then(result => {
            expect(result.result).toBeTruthy();
            expect(result.statusCode).toBe(200);
            expect(result.data.length).toBeGreaterThan(0);
        });
    });

});