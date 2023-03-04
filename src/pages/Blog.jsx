
import { getAllFilesFrontMatter } from './../components/lib/markdown/mdx';
import siteMetadata from 'components/lib/siteMetadata';
import ListLayout from './../components/lib/layouts/ListLayout';
import { PageSEO } from 'components/lib/SEO';

export const POSTS_PER_PAGE = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }
  return { props: { initialDisplayPosts, posts, pagination}}
}

export default function Blog ({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
    <PageSEO title={`Blog- ${siteMetadata.author}`} description={siteMetadata.description} />
    <section className="w-full flex flex-col gap-3 py-5 select-none mb-10  ">
                   
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
    </section>
    </>
  )
}
// const DEFAULT_LAYOUT = 'AuthorLayout'

// export async function getStaticProps() {
//   const authorDetails = await getFileBySlug('authors', ['default'])
//   return { props: { authorDetails } }
// }

// export default function About({ authorDetails }) {
//   const { mdxSource, frontMatter } = authorDetails

//   return (
//     <MDXLayoutRenderer
//       layout={frontMatter.layout || DEFAULT_LAYOUT}
//       mdxSource={mdxSource}
//       frontMatter={frontMatter}
//     />
//   )
// }