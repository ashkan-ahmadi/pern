const env = {
  mode: 'development',
  port: 3000,
  api: {
    host: 'http://',
  },
}

env.api.port = 5000
env.api.host = `http://localhost:${env.api.port}`

export default env
