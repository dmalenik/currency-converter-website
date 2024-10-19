import React from 'react'
import {
  Logo,
  Menu,
  ExchangeSection,
  SecurityDisclaimer,
  Transfer,
  TransferApp,
  DisclaimerSection,
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
        <DisclaimerSection />
      </main>
      <footer>
        <Map />
        <FooterNavigation />
      </footer>
    </div>
  )
}

export default App
