# AxiosTools

Commonly use tooling around the axios library.

## Mock

```js

const successJson = {
    id: 'cde4fb59-8699-4fcf-be4e-37dae895dd73',
    name: 'My Product'
}

const failureJson = {
    message: 'failed to load the product with id : "cde4fb59-8699-4fcf-be4e-37dae895dd73"',
    error: 'BAD REQUEST'
};


const axiosMock = new AxiosMock();
axiosMock.get({
    success: successJson,
    failure: failureJson,
    failure_code: 400,
    time: 2700, // 2.7 sec
    successRate: 0.9 // success rate of 9 out of 10 calls
});

```