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
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta property="description" content="Tama GoGo Tech Blog" />
        <meta property="og:description" content="Tama GoGo Tech Blog" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />

      <div className="container mx-auto flex-auto min-w-0 px-4 sm:px-6 xl:px-8 pb-24 lg:pb-20">
        <main>{children}</main>
      </div>

      <footer className=" footer bg-white relative pt-1 ">
        <div className="mt-16 flex flex-col items-center bg-gray-900 text-white">
          <div className="lg:w-4/5 flex justify-between pt-8 pb-9">
            <p className="cursor-pointer font-bold text-lg font-sans">
              <Link href="/" passHref>
                <a>{siteTitle}</a>
              </Link>
            </p>

            <div className="flex justify-between text-sm items-end">
              {!isHome ? (
                <p className="ml-5 cursor-pointer hover:underline">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </p>
              ) : null}
              <p className="ml-5 cursor-pointer hover:underline">
                <Link href="/profile">
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
