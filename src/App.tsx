import React from 'react'
import {
  Header,
  CurrencyConverter,
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
      <Header />
      <main>
        <CurrencyConverter />
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
