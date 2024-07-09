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

## Interceptors

### Authorization

Get an access token from storage and pass it along as param.
When param is set, the access token is attached via the interceptor.

```js

const AxiosInstance = axios.create();

AxiosInstance.defaults.params.access_token = 'MY ACCESS TOKEN';
AxiosInstance.interceptors.request.use(addAccessToken, interceptorFailure);

// or 

AxiosInstance
    .get(
        '/api',
        {
            params: {
                access_token: "MY ACCESS TOKEN"
            }
        }
)


```

### Domain

Add a custom HTTP header with the domain the request came from.
This will be derived from the javascript function "window.location.host.split(":")[0];"

Since this is a custom header, the header will be prefixed with X-.
You can also provide a namespace to further specify the header.


```js

const AxiosInstance = axios.create();
AxiosInstance.defaults.namespace = 'My-Project'

// X-My-Project-Domain 
AxiosInstance.interceptors.request.use(addDomainHeader, interceptorFailure);

```

### Json

Most modern api's communicate request and response in JSON.
To make clear, the api will send JSON and expects JSON back we 
add it to the headers of the request.

```js

const AxiosInstance = axios.create();

AxiosInstance.interceptors.request.use(addJsonHeaders, interceptorFailure);

```

### Language

When the api sends back textual fields that are shown to the end user.
It needs to provide these in the correct language. 

```js

const AxiosInstance = axios.create();

AxiosInstance.defaults.params.language = 'nl';
AxiosInstance.interceptors.request.use(addLanguageHeader, interceptorFailure);

// or 

AxiosInstance
    .get(
        '/api',
        {
            params: {
                language: "nl"
            }
        }
    )



```

### Device

Add a custom HTTP header with the device the request came from.

Since this is a custom header, the header will be prefixed with X-.
You can also provide a namespace to further specify the header.


```js

const AxiosInstance = axios.create();
AxiosInstance.defaults.namespace = 'My-Project'
AxiosInstance.defaults.params.device_id = 'MY DEVICE ID';
AxiosInstance.defaults.params.device_name = 'MY DEVICE NAME';

// X-My-Project-Device-Id 
// X-My-Project-Device-Name
AxiosInstance.interceptors.request.use(addDeviceHeader, interceptorFailure);

// Or

AxiosInstance
    .get(
        '/api',
        {
            params: {
                device_id: "MY DEVICE ID",
                device_name: "MY DEVICE NAME"
            }
        }
    )


```