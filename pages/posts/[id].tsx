import Layout from 'components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import Markdown from "components/Markdown";
import { renderToStaticMarkup } from "react-dom/server";
import {Author} from "components/block/profile/author";
import {TypographyVariantH1} from "components/typography/headings";

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
        <TypographyVariantH1>{title}</TypographyVariantH1>
        <Author date={date} name="Nexus4812"/>
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

export const getStaticProps: GetStaticProps<staticEntity, {id: string}> = async context => {
  const postData: any = await getPostData(context.params.id)

  return {
    props: {
      title: postData.title,
      date: postData.date,
      body: renderToStaticMarkup(<Markdown>{postData.md}</Markdown>), // ここで.mdを静的なHTMLに変換する
      revalidate: 1,
    }
  }
}
