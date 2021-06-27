import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import { getSortedPostsData, postData } from 'lib/posts'
import { dateListItemsProp, DateListItems } from 'components/block/items/ItemList'
import { GetStaticProps } from 'next'

type props = { items: dateListItemsProp[] }

export default function Home({ items }: props) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mt-5">
        <DateListItems items={items} />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<props> = async () => {
  const allPostsData: postData[] = getSortedPostsData()

  const listItems: dateListItemsProp[] = allPostsData.map(({ id, title, date }) => ({
    url: `/posts/${id}`,
    title: title,
    date: date
  }))

  return {
    props: {
      items: listItems
    }
  }
}
