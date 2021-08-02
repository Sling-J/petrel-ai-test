import React, { FC, Fragment } from 'react'

import { Router } from 'src/router'
import { Header } from 'src/components/header'
import { Footer } from 'src/components/footer'

export interface AppProps {}

const App: FC<AppProps> = () => (
  <Fragment>
    <Header/>
    <Router />
    <Footer/>
  </Fragment>
)

export default App
