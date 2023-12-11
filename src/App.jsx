// import React, { Suspense, memo } from "react";
// import { BrowserRouter, useRoutes } from "react-router-dom";
// import { Provider } from "react-redux";
// import { ThemeProvider } from "styled-components";
// import store from "./store";
// import routes from "./router";
// import { theme } from "./assets/css";
// import AppHeader from "@/components/app-header";

// const App = memo(() => {
//   return (
//     <BrowserRouter>
//       <Provider store={store}>
//         <ThemeProvider theme={theme}>
//           <AppHeader />
//           <Suspense fallback="loading...">{useRoutes(routes)}</Suspense>
//         </ThemeProvider>
//       </Provider>
//     </BrowserRouter>
//   );
// });

// export default App;

import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppHeader from './components/app-header'
import routes from './router'

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader/>
      <Suspense fallback="loading">
        <div className='page'>
          {useRoutes(routes)}
        </div>
      </Suspense>
    </div>
  )
})

export default App
