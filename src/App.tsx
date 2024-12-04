import React from 'react'
import {
  Header,
  ExchangeSection,
  SecurityDisclaimerSection,
  Transfer,
  Register,
  TransferApp,
  DisclaimerSection,
  Map,
  Footer,
} from './views'

function App() {
  return (
    <div className='App' data-testid='app'>
      <Header />
      <main data-testid='main'>
        <ExchangeSection />
        <SecurityDisclaimerSection />
        <Transfer />
        <Register />
        <TransferApp />
        <DisclaimerSection />
        <Map />
      </main>
      <Footer />
    </div>
  )
}

export default App
