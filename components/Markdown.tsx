import React from 'react'
import gfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { twilight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { NormalComponents, SpecialComponents } from 'react-markdown/src/ast-to-react'
import {
  TypographyVariantH1,
  TypographyVariantH2,
  TypographyVariantH3,
  TypographyVariantH4,
  TypographyVariantH5
} from './typography/headings'

type prop = {
  children: string
}

export default function Markdown({ children }: prop): JSX.Element {
  const components: Partial<NormalComponents & SpecialComponents> = {
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <div className="mb-5" style={{ border: 'none', fontSize: '0.7em' }}>
          <SyntaxHighlighter
            style={{
              ...twilight,
              border: 'none !important',
              fontSize: '0.7em'
            }}
            language={match[1]}
            PreTag="div"
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className={className} {...props} />
      )
    },

    /* eslint-disable react/display-name */
    h1: ({ ...props }) => <TypographyVariantH1 id={String(props.children[0])} {...props} />,
    h2: ({ ...props }) => <TypographyVariantH2 id={String(props.children[0])} {...props} />,
    h3: ({ ...props }) => <TypographyVariantH3 id={String(props.children[0])} {...props} />,
    h4: ({ ...props }) => <TypographyVariantH4 id={String(props.children[0])} {...props} />,
    h5: ({ ...props }) => <TypographyVariantH5 id={String(props.children[0])} {...props} />,
    em: ({ ...props }) => <i className="font-bold" {...props} />,
    ul: ({ ...props }) => <ul className="pl-1 mb-5 list-disc list-inside" {...props} />,
    li: ({ ...props }) => <li className="mb-1" {...props} />,
    p: ({ ...props }) => <p className="mb-5" {...props} />
    /* eslint-disable react/display-name */
  }

  return (
    <ReactMarkdown plugins={[gfm]} components={components}>
      {children}
    </ReactMarkdown>
  )
}
