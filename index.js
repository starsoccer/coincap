const url = 'http://coincap.io';
const got = require('got');

exports.getCoins = async function getCoins() {
    const result = await got(`${url}/coins`);
    return { result: result.statusCode === 200, statusCode: result.statusCode, data: result.body };
}
