# apple-iap-validator

Simple Validator through the apple webinterface

## Getting started

Install this library through: 

```bash
npm i apple-iap-validator # or yarn add apple-iap-validator
```

## Usage

Options:

```typescript
const options = {
	appShared : "AppShared password"
}
```
Create the verifier object:

```typescript
import Verifier from 'apple-iap-validator';
const verify = new Verifier(options);
```
Validate receipt:
```typescript
const result = await verify.verifiy(encodedReceipt);
//result encoded like the Apple Doc : https://developer.apple.com/documentation/appstorereceipts/responsebody
//or throws error if no Http 200 status code is returnd
```
