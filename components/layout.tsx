import Nav from './contents/Nav'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export const siteTitle = 'Tama GoGo!!!'

const Layout: FC = ({ children }) => {
  const isHome = useRouter().asPath === '/'

  return (
    <>
      <Head>
        <title>Next blogs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />

      <div className="container mx-auto flex-auto min-w-0 px-4 sm:px-6 xl:px-8 pb-24 lg:pb-20">
        <main>{children}</main>
      </div>

      <footer className=" footer bg-white relative pt-1 ">
        <div className="mt-16 flex flex-col items-center bg-gray-900 text-white">
          <div className="w-4/5 flex justify-between pt-8 pb-9">
            <Link href="/" passHref>
              <p className="cursor-pointer font-bold text-lg font-sans">
                <a>{siteTitle}</a>
              </p>
            </Link>
            <div className="flex justify-between text-sm items-end">
              {!isHome ? (
                <p className="ml-5 cursor-pointer hover:underline">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </p>
              ) : null}
              <p className="ml-5 cursor-pointer hover:underline">
                <Link href="/">
                  <a>About</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
