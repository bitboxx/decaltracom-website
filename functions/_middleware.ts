const AUTH_USER = 'visitor'
const AUTH_PASS = 'creditmemo'

export const onRequest: PagesFunction = async (context) => {
  const auth = context.request.headers.get('Authorization')

  if (auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme === 'Basic' && encoded) {
      const decoded = atob(encoded)
      const [user, pass] = decoded.split(':')
      if (user === AUTH_USER && pass === AUTH_PASS) {
        return context.next()
      }
    }
  }

  return new Response('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Protected"',
    },
  })
}
