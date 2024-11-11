import React from 'react'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { UnorderedList, Link } from '../../components'

export const FooterMenu = () => {
  return (
    <div>
      <UnorderedList>
        <Link description={'Home'} ariaLabel='home' />
        <Link description={'About us'} ariaLabel='about us' />
        <Link description={'Blog'} ariaLabel='blog' />
        <Link description={'Contact us'} ariaLabel='contact us' />
        <Link description={'Fraud awareness'} ariaLabel='fraud awareness' />
        <Link description={'Report a security bug'} ariaLabel='report a bug' />
      </UnorderedList>
      <UnorderedList>
        <Link description={<FaFacebook />} ariaLabel='facebook' />
        <Link description={<FaYoutube />} ariaLabel='youtube' />
        <Link description={<BsInstagram />} ariaLabel='instagram' />
        <Link description={<FaXTwitter />} ariaLabel='twitter' />
      </UnorderedList>
    </div>
  )
}
