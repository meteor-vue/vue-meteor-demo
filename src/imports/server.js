import './api/publications'

import Vue from 'vue'
import ApolloSSR from 'vue-apollo/ssr'
import { VueSSR } from 'meteor/akryum:vue-ssr'
import CreateApp from './app'
import App from './ui/App.vue'

const isDev = process.env.NODE_ENV !== 'production'

/*
// Simple createApp
VueSSR.createApp = function (context) {
  const { app, router, store } = CreateApp()
  
  // set router's location
  router.push(context.url)
  
  return app
}
*/

Vue.use(ApolloSSR)

// This will be called each time the app is rendered
VueSSR.createApp = function (context) {
  const s = isDev && Date.now()

  return new Promise((resolve, reject) => {
    const { app, router, store, apolloProvider } = CreateApp({
      ssr: true,
    })

    // set router's location
    router.push(context.url)

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      // no matched routes
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }

      let js = ''

      // Call preFetch hooks on components matched by the route.
      // A preFetch hook dispatches a store action and returns a Promise,
      // which is resolved when the action is complete and store state has been
      // updated.
      // Vuex Store prefetch
      Promise.all(matchedComponents.map(component => {
        return component.asyncData && component.asyncData({
          store,
          route: router.currentRoute,
        })
      }))
      // Apollo prefetch
      // This will prefetch all the Apollo queries in the whole app
      .then(() => ApolloSSR.prefetchAll(apolloProvider, [App, ...matchedComponents], {
        store,
        route: router.currentRoute,
      })).then(() => {
        isDev && console.log(`[SSR] Data prefetch: ${Date.now() - s}ms`)

        // After all preFetch hooks are resolved, our store is now
        // filled with the state needed to render the app.
        // Expose the state on the render context, and let the request handler
        // inline the state in the HTML response. This allows the client-side
        // store to pick-up the server-side state without having to duplicate
        // the initial data fetching on the client.

        js += `window.__INITIAL_STATE__=${JSON.stringify(store.state)};`

        js += ApolloSSR.exportStates(apolloProvider)

        resolve({
          app,
          js,
        })
      }).catch(reject)
    })
  })
}
