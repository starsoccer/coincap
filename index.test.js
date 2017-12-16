describe('/coins', () => {

    test('loads', () => {
        const coincap = require('./index.js');
        coincap.getCoins().then(result => {
            expect(result.result).toBeTruthy();
            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.data).length).toBeGreaterThan(0);
        });
    });

});