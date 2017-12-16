const coincap = require('../src');

describe('/coins', () => {
    let result;
    beforeAll(() => {
        return coincap.getCoins().then(data => {
            result = data;
            return data;
        });
    });
      
    test('loads', done => {
        expect(result.result).toBeTruthy();
        expect(result.statusCode).toBe(200);
        expect(result.data.length).toBeGreaterThan(0);
        done();
    });

    test('check for BTC', done => {
        expect(result.data.indexOf('BTC')).toBeGreaterThan(0);
        done();
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
      
    test('loads', done => {
        expect(result.result).toBeTruthy();
        expect(result.statusCode).toBe(200);
        expect(result.data.length).toBeGreaterThan(0);
        done();
    });

    test('check for BTC', done => {
        foundBTC = false;
        for(coin of result.data) {
            if (coin.symbol === 'BTC'){
                foundBTC = true;
                break;
            }
        }
        expect(foundBTC).toBeTruthy();
        done();
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
      
    test('loads', done => {
        expect(result.result).toBeTruthy();
        expect(result.statusCode).toBe(200);
        expect(result.data.length).toBeGreaterThan(0);
        done();
    });

    test('check for BTC', done => {
        foundBTC = false;
        for(coin of result.data) {
            if (coin.short === 'BTC'){
                foundBTC = true;
                break;
            }
        }
        expect(foundBTC).toBeTruthy();
        done();
    });

});

describe('/global', () => {
    let result;
    beforeAll(() => {
        return coincap.global().then(data => {
            result = data;
            return data;
        });
    });
      
    test('loads', done => {
        expect(result.result).toBeTruthy();
        expect(result.statusCode).toBe(200);
        expect(Object.keys(result.data).length).toBeGreaterThan(0);
        done();
    });

    test('check for btcPrice', done => {
        expect(result.data.btcPrice).toBeGreaterThan(0);
        done();
    });

});

describe('/page/coin', () => {

    test('loads', done => {
        const coin = 'BTC';
        coincap.getCoin(coin).then(result => {
            expect(result.result).toBeTruthy();
            expect(result.statusCode).toBe(200);
            expect(result.data.id).toEqual(coin);
            done();
        });
    });

});