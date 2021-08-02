import React, { FC } from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'

import { store } from 'store/configureStore/configureStore'
import { theme } from 'src/ui/theme'

import { App } from 'src/components/root'

import 'antd/dist/antd.css'
import 'assets/main.css'

const Index: FC = () => (
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </HashRouter>
  </Provider>
)

ReactDOM.render(<Index/>, document.getElementById('root'))
