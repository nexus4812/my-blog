import React, { VFC, PropsWithChildren } from 'react'
import Link, { LinkProps } from 'next/link'

export const Anchor: VFC<PropsWithChildren<JSX.IntrinsicElements['a']>> = ({ children, ...props }) => (
  <a {...props} className="cursor-pointer hover:underline">
    {children}
  </a>
)

export const BlueAnchor: VFC<PropsWithChildren<JSX.IntrinsicElements['a']>> = ({ children, ...props }) => (
  <a {...props} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 cursor-pointer">
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
