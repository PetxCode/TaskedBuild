import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './router/mainRoute'
import { Provider } from "react-redux"
import { store } from './global/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const persistor = persistStore(store)
const queryClient = new QueryClient()

const App = () => {
  return (
    <div>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={mainRoute} />

            <ReactQueryDevtools />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App