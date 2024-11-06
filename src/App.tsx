import React from 'react'
import {
  Header,
  ExchangeSection,
  SecurityDisclaimerSection,
  Transfer,
  TransferApp,
  DisclaimerSection,
  Map,
  Footer,
} from './views'

function App() {
  return (
    <div className='App' data-testid='app'>
      <Header data-testid='header' />
      <main data-testid='main'>
        <ExchangeSection />
        <SecurityDisclaimerSection />
        <Transfer />
        <TransferApp />
        <DisclaimerSection />
        <Map />
      </main>
      <Footer data-testid='footer' />
    </div>
  )
}

export default App
