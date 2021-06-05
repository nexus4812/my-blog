import
  Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import Markdown from "../../components/Markdown";
import { renderToStaticMarkup } from "react-dom/server";

type staticEntity = {
  title: string
  date: string
  body: string
  revalidate: number
}

export default function Post({ title, date,  body }: staticEntity) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className="mb-5 text-gray-400">
          <Date dateString={date} />
        </div>
        <div className="text" dangerouslySetInnerHTML={{__html: body}} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async function () {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const postData: any = await getPostData(context.params.id)

  return {
    props: {
      title: postData.title,
      date: postData.date,
      body: renderToStaticMarkup(<Markdown>{postData.md}</Markdown>),
      revalidate: 1,
    }
  }
}
