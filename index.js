const querystring = require('querystring')

const register = function (server, opts = {}) {
  // Set options with defaults if required
  const { path = '/proxy', uri, options = {} } = opts

  server.register([require('@hapi/h2o2')])

  server.route({
    method: 'GET',
    path: `${path}/{path*}`,
    handler: {
      proxy: {
        mapUri: (request) => {
          const { path } = request.params
          const query = querystring.stringify(request.query)
          return { uri: `${uri}/${path}${query ? `?${query}` : ''}` }
        }
      }
    },
    options
  })
}

const pkg = require('./package')

exports.plugin = {
  name: pkg.name,
  register,
  pkg
}
