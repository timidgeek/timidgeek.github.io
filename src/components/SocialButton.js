import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialButton = ({ icon, href, onClick, label, iconStyle }) => {
  const button = (
    <button onClick={onClick} aria-label={href ? undefined : label} className='accent-button hover:animate-hop flex items-center gap-2 !rounded-full aspect-square !py-2 !px-3'>
      <FontAwesomeIcon icon={icon} size="2x" style={iconStyle} />
    </button>
  )

  if (href) {
    return (
      <a href={href} target='_blank' rel='noreferrer' aria-label={label}>
        {button}
      </a>
    )
  }

  return button
}

export default SocialButton
