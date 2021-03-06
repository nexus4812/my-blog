import React, { VFC } from 'react'

type prop = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

export const TypographyVariantH1: VFC<prop> = ({ children, ...prop }: prop) => (
  <h1 className="mb-4 text-3xl font-bold" {...prop}>
    {children}
  </h1>
)

export const TypographyVariantH2: VFC<prop> = ({ children, ...prop }: prop) => (
  <h2 className="mb-3 text-2xl font-bold" {...prop}>
    {children}
  </h2>
)

export const TypographyVariantH3: VFC<prop> = ({ children, ...prop }: prop) => (
  <h3 className="mb-2 text-lg font-bold" {...prop}>
    {children}
  </h3>
)

export const TypographyVariantH4: VFC<prop> = ({ children, ...prop }: prop) => (
  <h4 className="mb-1 text-lg font-bold" {...prop}>
    {children}
  </h4>
)

export const TypographyVariantH5: VFC<prop> = ({ children, ...prop }: prop) => (
  <h5 className="mb-1 font-bold" {...prop}>
    {children}
  </h5>
)
