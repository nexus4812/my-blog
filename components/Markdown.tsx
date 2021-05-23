import React from 'react'
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {twilight} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {NormalComponents, SpecialComponents} from "react-markdown/src/ast-to-react";

export default function Markdown({ markdownString }) {
    const components: Partial<NormalComponents & SpecialComponents> = {
        code({node, inline, className, children, ...props}: any) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <div className="mb-5" style={{border: "none", fontSize: "0.7em"}}>
                    <SyntaxHighlighter style={{...twilight, border: "none !important", fontSize: "0.7em"}} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
                </div>
            ) : (
                <code className={className} {...props} />
            )
        },

        h1: ({node, ...props}) => <h1 className="mb-4 text-3xl font-bold" id={props.children[0]} {...props} />,
        h2: ({node, ...props}) => <h2 className="mb-3 text-2xl font-bold" id={props.children[0]} {...props} />,
        h3: ({node, ...props}) => <h3 className="mb-2 text-xl  font-bold" id={props.children[0]} {...props} />,
        h4: ({node, ...props}) => <h4 className="mb-1 text-lg  font-bold" {...props} />,
        h5: ({node, ...props}) => <h5 className="font-bold" {...props} />,
        em: ({node, ...props}) => <i className="font-bold" {...props} />,
        ul: ({node, ...props}) => <ul className="pl-1 mb-5 list-disc list-inside" {...props} />,
        li: ({node, ...props}) => <li className="mb-1" {...props} />,
        p:  ({node, ...props}) => <p className="mb-5" {...props} />
    }

    return (
        <ReactMarkdown
            children={markdownString}
            plugins={[gfm]}
            components={components}
        />
    )
}