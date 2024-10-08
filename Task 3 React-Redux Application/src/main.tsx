import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Toaster position='bottom-right' richColors={true} />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
