import { GithubIcon, Instagram, Linkedin, Twitter } from 'components/common'
import React from 'react'
import { Grow, Social } from './styles.js'

export default () => {
  const social = [
    {
      id: 0,
      name: 'Twitter',
      link: 'https://twitter.com/ravikpasupuleti',
      icon: Twitter,
      last: false,
    },
    {
      id: 1,
      name: 'Github',
      link: 'https://github.com/ravikumarpasupuleti',
      icon: GithubIcon,
      last: false,
    },
    {
      id: 4,
      name: 'Linkedin',
      link: 'https://linkedin.com/in/ravikumarpasupuleti',
      icon: Linkedin,
      last: false,
    },
  ]
  return (
    <li>
      {social.map(({ id, name, link, icon, last }) => (
        <Social
          key={id}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`follow me on ${name}`}
          href={link}
          last={last}
        >
          <Grow as={icon} width="24" height="24" />
        </Social>
      ))}
    </li>
  )
}
