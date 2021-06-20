import React, {VFC, PropsWithChildren, ForwardRefExoticComponent, PropsWithoutRef} from "react";
import Link, {LinkProps} from "next/link";
type anchorProps = JSX.IntrinsicElements['a'];

export const TypographyAnchor:ForwardRefExoticComponent<PropsWithoutRef<any>> = React.forwardRef(({children,...props }, ref) => (
    <a ref={ref} className="cursor-pointer hover:underline" {...props}>{children}</a>
))

export const TypographyNextAnchor: VFC<PropsWithChildren<LinkProps>> = ({children, ...props}:PropsWithChildren<LinkProps>) => (
    <Link {...props} passHref><TypographyAnchor>{children}</TypographyAnchor></Link>
)