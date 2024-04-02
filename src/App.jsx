import Header from './layouts/Header'
import Router from './Router'
import './assets/scss/ui.scss'

function App() {
  return (
    <>
      <Header />

      <main className='manage-main'>
        <Router />
      </main>
    </>
  )
}

export default App
