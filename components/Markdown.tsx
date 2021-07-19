import React from 'react'
import gfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { twilight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { NormalComponents, SpecialComponents } from 'react-markdown/src/ast-to-react'
import rehypeRaw from 'rehype-raw'
import {
  TypographyVariantH1,
  TypographyVariantH2,
  TypographyVariantH3,
  TypographyVariantH4,
  TypographyVariantH5
} from './typography/headings'
import { BlueAnchor } from './typography/anchor'

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
    h1: ({ ...props }) => <TypographyVariantH1 id={String(props.children[0])}>{props.children}</TypographyVariantH1>,
    h2: ({ ...props }) => <TypographyVariantH2 id={String(props.children[0])}>{props.children}</TypographyVariantH2>,
    h3: ({ ...props }) => <TypographyVariantH3 id={String(props.children[0])}>{props.children}</TypographyVariantH3>,
    h4: ({ ...props }) => <TypographyVariantH4 id={String(props.children[0])}>{props.children}</TypographyVariantH4>,
    h5: ({ ...props }) => <TypographyVariantH5 id={String(props.children[0])}>{props.children}</TypographyVariantH5>,
    em: ({ ...props }) => <i className="font-bold">{props.children}</i>,
    ul: ({ ...props }) => <ul className="pl-1 mb-5 list-disc list-inside">{props.children}</ul>,
    li: ({ ...props }) => <li className="mb-1">{props.children}</li>,
    p: ({ ...props }) => <p className="mb-5">{props.children}</p>,
    a: ({ ...props }) => <BlueAnchor target="_blank">{props.children}</BlueAnchor>,
    table: ({ ...props }) => <table className="my-3 min-w-full divide-y divide-gray-200">{props.children}</table>,
    th: ({ ...props }) => (
      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        {props.children}
      </th>
    ),
    tr: ({ ...props }) => <th>{props.children}</th>,
    td: ({ ...props }) => <td className="px-3 py-2 whitespace-nowrap">{props.children}</td>
    /* eslint-disable react/display-name */
  }

  return (
    <ReactMarkdown plugins={[gfm]} rehypePlugins={[rehypeRaw]} components={components}>
      {children}
    </ReactMarkdown>
  )
}
