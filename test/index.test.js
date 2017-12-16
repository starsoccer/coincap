const coincap = require('../src');

describe('/coins', () => {

    test('loads', () => {
        coincap.getCoins().then(result => {
            expect(result.result).toBeTruthy();
            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.data).length).toBeGreaterThan(0);
        });
    });

});

describe('/map', () => {
    
    test('loads', () => {
        coincap.map().then(result => {
            expect(result.result).toBeTruthy();
            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.data).length).toBeGreaterThan(0);
        });
    });

});