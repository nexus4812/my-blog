import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Github</h2>
        <iframe
          loading="lazy"
          src="https://hatenablog-parts.com/embed?url=https://github.com/nexus4812"
          className="w-6/12"
        />
      </section>
    </Layout>
  )
}
