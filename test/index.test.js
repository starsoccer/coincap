const coincap = require('../src');

describe('/coins', () => {
    let result;
    beforeAll(() => {
        return coincap.getCoins().then(data => {
            result = data;
            return data;
        });
    });
      
    test('loads', () => {
        expect(result.result).toBeTruthy();
        expect(result.statusCode).toBe(200);
        expect(result.data.length).toBeGreaterThan(0);
    });

    test('check for BTC', () => {
        expect(result.data.indexOf('BTC')).toBeGreaterThan(0);
    });
});

describe('/map', () => {
    let result;
    beforeAll(() => {
        return coincap.map().then(data => {
            result = data;
            return data;
        });
    });
      
    test('loads', () => {
        expect(result.result).toBeTruthy();
        expect(result.statusCode).toBe(200);
        expect(result.data.length).toBeGreaterThan(0);
    });

    test('check for BTC', () => {
        foundBTC = false;
        for(coin of result.data) {
            if (coin.symbol === 'BTC'){
                foundBTC = true;
                break;
            }
        }
        expect(foundBTC).toBeTruthy();
    });

});

describe('/front', () => {
    let result;
    beforeAll(() => {
        return coincap.front().then(data => {
            result = data;
            return data;
        });
    });
      
    test('loads', () => {
        expect(result.result).toBeTruthy();
        expect(result.statusCode).toBe(200);
        expect(result.data.length).toBeGreaterThan(0);
    });

    test('check for BTC', () => {
        foundBTC = false;
        for(coin of result.data) {
            if (coin.short === 'BTC'){
                foundBTC = true;
                break;
            }
        }
        expect(foundBTC).toBeTruthy();
    });

});