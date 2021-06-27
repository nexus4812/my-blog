import fs from 'fs'
import path from 'path'
import matter, { GrayMatterFile, Input } from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface postData {
  id: string
  date: string
  title: string
}

export function getSortedPostsData(): postData[] {
  // Get file names under /posts
  const fileNames: string[] = fs.readdirSync(postsDirectory)

  const allPostsData: postData[] = fileNames.map<postData>((fileName: string) => {
    // Remove ".md" from file name to get id
    const id: string = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath: string = path.join(postsDirectory, fileName)
    const fileContents: string = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult: GrayMatterFile<Input> = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date
    }
  })

  // Sort posts by date
  return allPostsData.sort((a: postData, b: postData) => (a.date < b.date ? 1 : -1))
}

export function getAllPostIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export interface getPostContentData extends postData {
  md: string
}
export async function getPostData(id: string): Promise<getPostContentData> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult: GrayMatterFile<Input> = matter(fileContents)
  const md = matterResult.content

  // Combine the data with the id and contentHtml
  return {
    id,
    md,
    title: matterResult.data.title,
    date: matterResult.data.date
  }
}
