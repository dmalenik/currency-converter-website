import React from 'react'
import {
  Logo,
  Menu,
  ExchangeSection,
  SecurityDisclaimer,
  Transfer,
  TransferApp,
  Disclaimer,
  Map,
  FooterNavigation,
} from './views'

function App() {
  return (
    <div className='App'>
      <header>
        <Logo />
        <Menu />
      </header>
      <main>
        <ExchangeSection />
        <SecurityDisclaimer />
        <Transfer />
        <TransferApp />
        <Disclaimer />
      </main>
      <footer>
        <Map />
        <FooterNavigation />
      </footer>
    </div>
  )
}

export default App
