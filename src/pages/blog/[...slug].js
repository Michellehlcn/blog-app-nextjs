
import  {MDXLayoutRenderer} from './../../components/lib/markdown/MDXComponents';
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from 'components/lib/markdown/mdx';
import { post } from 'request';

const DEFAULT_LAYOUT = 'PostLayout';
export async function getStaticPaths() {
    const posts = getFiles('blog')
    return {
        paths: posts.map((p)=> ({
            params: {
                slug: formatSlug(p).split('/'),
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps ({params}) {
  
    const allPosts = await getAllFilesFrontMatter('blog')
    if (typeof allPosts === undefined) return;
    const postIndex = allPosts.findIndex((post)=> formatSlug(post.slug) === params.slug.join('/'))
    const prev = allPosts[postIndex + 1] || null;
    const next = allPosts[postIndex - 1] || null;
    const post = await getFileBySlug('blog', params.slug.join('/'))
    const authorList = post.frontMatter.authors || ['default'];
    const authorPromise = authorList.map(async (author) => {
        const authorResults = await getFileBySlug('authors', ['default'])
        return authorResults.frontMatter
    })
    const authorDetails =await getFileBySlug('authors', ['default']);
    // Skip RSS
    
    return  { props: { post, authorDetails, prev, next}}
}

export default function Blog ({ post, authorDetails, prev, next}) {
    const { mdxSource, toc, frontMatter } = post
    return ( 
        <>
        {frontMatter.draft !== true ?  (
            <MDXLayoutRenderer
            layout={frontMatter.layout || DEFAULT_LAYOUT}
            toc={toc}
            mdxSource={mdxSource}
            frontMatter={frontMatter}
            authorDetails={authorDetails}
            prev={prev}
            next={next}
            />
        ): (
            <div className='mt-24 text-center'>
                <h1>Under Contruction {' '}</h1>
            </div>
        )}
        </>
    )
}