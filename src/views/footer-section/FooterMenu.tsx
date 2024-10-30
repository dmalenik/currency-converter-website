import React from 'react'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { UnorderedList, Link } from '../../components'

export const FooterMenu = () => {
  return (
    <div>
      <UnorderedList>
        <Link description={'Home'} />
        <Link description={'About us'} />
        <Link description={'Blog'} />
        <Link description={'Contact us'} />
        <Link description={'Fraud awareness'} />
        <Link description={'Report a security bug'} />
      </UnorderedList>
      <UnorderedList>
        <Link description={<FaFacebook />} />
        <Link description={<FaYoutube />} />
        <Link description={<BsInstagram />} />
        <Link description={<FaXTwitter />} />
      </UnorderedList>
    </div>
  )
}
