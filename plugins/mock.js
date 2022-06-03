export default async ({$config}) => {
    if ($config.enableMockserver) {
      let mocks = require('../mocks/browser')
      await mocks.worker.start({
        onUnhandledRequest(req) {
          console.error(
            'Found an unhandled %s request to %s',
            req.method,
            req.url.href,
          )
        },
      })
      console.log('mockserver started')
    }
  }
  