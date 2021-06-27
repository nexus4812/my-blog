import React, { VFC, PropsWithChildren } from 'react'
import Link, { LinkProps } from 'next/link'

export const Anchor: VFC<PropsWithChildren<JSX.IntrinsicElements['a']>> = ({ children, ...props }) => (
  <a {...props} className="cursor-pointer hover:underline">
    {children}
  </a>
)

export const TypographyNextAnchor: VFC<PropsWithChildren<LinkProps>> = ({
  children,
  ...props
}: PropsWithChildren<LinkProps>) => (
  <Link {...props} passHref>
    <Anchor>{children}</Anchor>
  </Link>
)
