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
      <Footer />
    </div>
  )
}

export default App
