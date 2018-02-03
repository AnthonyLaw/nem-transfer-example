# Nem Transfer Xem and Mosaic

* This project showing example how to do transfer Xem and mosaic.
* Using Nodejs, Express, [nem-sdk][nem-sdk]
* please check on more info on [nem-sdk][nem-sdk].

## Usage

* this is endpoint

For Xem: `/transfer/xem/TargetAddress/Amount`

For Mosaic: `/transfer/mosaic/TargetAddress/Amount`

Example : `curl http://localhost:3000/transfer/xem/TCPVKPCPGMDH7KCQQR6JWIGQ5RM6C2FRB2LALJ4V/25`

## Install

`npm install`

`npm start`

## Function in transfer.js

### Password and PrivateKey required

```javascript
var common = nem.model.objects.create('common')('Password', 'PrivateKey');
```

### replace namespace and Mosaic name required

```javascript
var mosaicAttachment = nem.model.objects.create('mosaicAttachment')(
  'Namespace',
  'masaicName',
  amount
);
```

### Replace mosaic name

```javascript
var neededDefinition = nem.utils.helpers.searchMosaicDefinitionArray(res.data, [
  'masaicName',
]);
```

## License & Code of Conduct

[MIT License][license]

[nem-sdk]: https://github.com/QuantumMechanics/NEM-sdk
