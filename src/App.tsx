import React from 'react'
import {
  Header,
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
      <Header />
      <main>
        <ExchangeSection />
        <SecurityDisclaimerSection />
        <Transfer />
        <TransferApp />
        <DisclaimerSection />
        <Map />
      </main>
      <footer>
        <FooterNavigation />
      </footer>
    </div>
  )
}

export default App
