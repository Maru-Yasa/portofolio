import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { HeadComponent } from '../components/HeadComponent'
import NavbarComponent from '../components/NavbarComponent.server'
import { ThemeProvider } from 'styled-components'
import { useCallback, useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '../components/Theme'
import { GlobalStyles } from '../components/globalstyles'

import '../config'
import { SSRProvider } from 'react-bootstrap'
import { getCookie, setCookie } from 'cookies-next'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(getCookie('initialTheme') || 'light');

  const themeToggler = useCallback((val) => {
    setCookie('initialTheme', val)
    setTheme(val)
  }, [setTheme])

  return (
  <SSRProvider>
    <HeadComponent />
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <NavbarComponent themeToggler={themeToggler} theme={theme}/>
        <Component {...pageProps} />
    </ThemeProvider>
  </SSRProvider>
  )
}

export default MyApp
