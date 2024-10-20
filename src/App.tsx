import React from 'react'
import {
  Logo,
  Menu,
  ExchangeSection,
  SecurityDisclaimerSection,
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
        <SecurityDisclaimerSection />
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
