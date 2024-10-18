import React from 'react'
import {
  Header,
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
      <Header />
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
