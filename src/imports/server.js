import './api/publications'

import { VueSSR } from 'meteor/akryum:vue-ssr'
import CreateApp from './app'

// You can change the rendered HTML template

/* VueSSR.template = `
<div class="app-wrapper">
  <!--vue-ssr-outlet-->
</div>
` */

// Simple create app

VueSSR.createApp = function ({ url }) {
  const { app, router } = CreateApp()
  // Set the URL in the router
  router.push(url)
  return app
}

// Returning a promise works too

/* VueSSR.createApp = function ({ url }) {
  return new Promise((resolve, reject) => {
    const { app, router } = CreateApp()
    // Set the URL in the router
    router.push(url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      // no matched routes
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }

      resolve(app)
    })
  })
} */
