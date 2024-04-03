import './assets/scss/ui.scss'
import Header from './layouts/Header'
import Router from './Router'
import { useEffect, useState } from 'react'

function App() {
  const [tabSize, setTabSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setTabSize(true);
      } else {
        setTabSize(false);
        document.querySelector('.manage-left-hd').classList.remove('tab-active');
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return (
    <div id='page' className={tabSize ? 'tab-size' : ''}>
      <Header />

      <main className='manage-main'>
        <Router />
      </main>
    </div>
  )
}

export default App
