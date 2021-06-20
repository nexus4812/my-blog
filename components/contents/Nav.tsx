import Link from "next/link";
import {useRouter} from "next/router";
import React from "react";
import {ProfileIcon, lg} from 'components/block/profile/profileIcon';

export default function Nav() {
    const isHome = useRouter().asPath === "/"
    const siteName = "Tama GoGo!!"

    return (
        <div className="bg-gray-900">
            <div className="container mx-auto flex-auto min-w-0 px-4 sm:px-6 xl:px-8">
                <nav className="flex items-center justify-between flex-wrap bg-teal p-1">
                    <div className="flex  items-center flex-no-shrink mr-6">
                        <Link href="/">
                            <a className="flex items-center cursor-pointer">
                                <img
                                    src="/logos/logo_transparent.png"
                                    alt="logo_image"
                                    height={50}
                                    width={50}
                                    className="mt-1"
                                />

                                {!isHome ? (<span className="text-white">{siteName}</span>) : null}
                            </a>
                        </Link>
                    </div>
                </nav>

                {isHome ? (
                    <div className="flex items-center flex-wrap bg-teal pb-20 pt-10">
                        <Link href="/">
                            <>
                                <ProfileIcon imageType={lg} />
                                <h1 className="text-4xl ml-3 font text-white font-sans">{siteName} <br/> Tech Blog</h1>
                            </>
                        </Link>
                    </div>
                ) : null}
            </div>
        </div>
    )
}