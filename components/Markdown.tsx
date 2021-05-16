import React from 'react'
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {twilight} from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Markdown({ markdownString }) {
    const components = {
        code({node, inline, className, children, ...props}: any) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <div style={{fontSize: '0.75em !important'}}>
                    <SyntaxHighlighter style={twilight} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
                </div>
            ) : (
                <code className={className} {...props} />
            )
        }
    }

    return (
        <ReactMarkdown
            children={markdownString}
            plugins={[gfm]}
            components={components}
        />
    )
}