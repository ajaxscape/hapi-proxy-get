# hapi-proxy-get
Hapi plugin to proxy get requests

## installation

'npm install hapi-proxy-get -S'

## usage

```
const Hapi = require('hapi');

const server = hapi.server();
await server.register([{
  plugin: require('hapi-proxy-get'),
  options: {
    uri: 'https://my-proxied-uri.com'
    path: '/proxy',
    options: {
      tags: ['proxy']
    }
  }
}]);
```

where:
- ```uri``` is the uri which where the request is directed to

    Note: A correct uri is required
    
- ```path``` is the prefix for the path

    Default: '/proxy'
            
- ```options``` is an object containing the hapi route options

    Default: {}