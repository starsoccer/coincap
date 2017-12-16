const url = 'http://coincap.io';
const got = require('got');

exports.getCoins = async function getCoins() {
    return createResult(await got(`${url}/coins`));
}

exports.map = async function map() {
    return createResult(await got(`${url}/map`));
}

exports.front = async function front() {
    return createResult(await got(`${url}/front`));
}

exports.global = async function global() {
    return createResult(await got(`${url}/global`));
}

function createResult(data) {
    const result = {result : data.statusCode === 200, statusCode: data.statusCode, data: data.body};
    if (result.statusCode === 200) {
        result.data = JSON.parse(result.data);
    }
    return result;
}