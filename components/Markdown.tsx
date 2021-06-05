import React from 'react'
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {twilight} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {NormalComponents, SpecialComponents} from "react-markdown/src/ast-to-react";
import {
    TypographyVariantH1,
    TypographyVariantH2,
    TypographyVariantH3,
    TypographyVariantH4,
    TypographyVariantH5,
} from "./typography/headings";

type prop = {
    children : string
};

export default function Markdown({children}: prop) {
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

        h1: ({node, ...props}) => <TypographyVariantH1 id={String(props.children[0])} {...props} />,
        h2: ({node, ...props}) => <TypographyVariantH2 id={String(props.children[0])} {...props} />,
        h3: ({node, ...props}) => <TypographyVariantH3 id={String(props.children[0])} {...props} />,
        h4: ({node, ...props}) => <TypographyVariantH4 id={String(props.children[0])} {...props} />,
        h5: ({node, ...props}) => <TypographyVariantH5 id={String(props.children[0])} {...props} />,
        em: ({node, ...props}) => <i className="font-bold" {...props} />,
        ul: ({node, ...props}) => <ul className="pl-1 mb-5 list-disc list-inside" {...props} />,
        li: ({node, ...props}) => <li className="mb-1" {...props} />,
        p:  ({node, ...props}) => <p className="mb-5" {...props} />
    }

    return (
        <ReactMarkdown
            children={children}
            plugins={[gfm]}
            components={components}
        />
    )
}