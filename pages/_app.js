import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { HeadComponent } from '../components/HeadComponent'
import NavbarComponent from '../components/NavbarComponent'
import { ThemeProvider } from 'styled-components'
import { useCallback, useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '../components/Theme'
import { GlobalStyles } from '../components/globalstyles'

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState('light');

  const themeToggler = useCallback((val) => {
    setTheme(val)
  }, [setTheme])

  return (
  <>
    <HeadComponent />
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <NavbarComponent themeToggler={themeToggler} theme={theme}/>
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}

export default MyApp
