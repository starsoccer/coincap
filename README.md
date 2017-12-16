# coincap
    coincap NPM module

## Installation
```
npm install coincap
```
## Example & Structure

All methods return a result in the following object structure

```
{
    result: boolean // indicates if call returned 200 or not
    statusCode: number // indicates statusCode number returned by call
    data: response // contains respose body. If result is set to true, this is a JSON object otherwise string
}
```

```javascript
const result = await coincap.getCoins();
if (result.result) {
    console.log(result.data);
}
```

## Usage

###getCoins
```javascript
coincap.getCoins().then(result => {
    //do something
});
```

###map
```javascript
coincap.map().then(result => {
    //do something
});
```

###front
```javascript
coincap.front().then(result => {
    //do something
});
```

###global
```javascript
coincap.global().then(result => {
    //do something
});
```

###getCoin(coin)
```javascript
coincap.getCoin('BTC').then(result => {
    //do something
});
```