import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppHeader from './components/app-header'
import routes from './router'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader/>
      <Suspense fallback="loading">
        <div className='page'>
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App
