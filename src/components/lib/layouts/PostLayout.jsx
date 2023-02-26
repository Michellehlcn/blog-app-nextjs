import Link from "next/link";
import siteMetadata from "../siteMetadata";

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`;

const postDateTemplate = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
export default function PostLayout ({ frontMatter, authorDetails, next, prev, children}) {
    const { slug, fileName, date, title, images, tag} = frontMatter
    return (
        <article>
            <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                    <div className="space-y-1 text-center">
                        <dl className="space-y-10">
                            <div>
                            <dt className="sr-only"> Published on</dt>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <time dateTime={date}>
                                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                                </time>
                            </dd>
                            </div>
                        </dl>
                        <div>
                            {title}
                        </div>
                    </div>
                </header>
                <div
                    className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0" style={{gridTemplateRows: 'auto 1fr'}}>
                        <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                            <dt className="sr-only">Authors</dt>
                            <dd>
                                <ul className="flex jusity-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                                    {authorDetails.map((author) => (
                                        <li className="flex items-center space-x-2" key={author.name}>
                                            {author.avatar && (
                                                <Image
                                                src={author.avatar}
                                                width="38px"
                                                height="38px"
                                                alt="avatar"
                                                className="h-10 w-10 rounded-full"
                                                />
                                            )}
                                            <dl className="whitspace-nowrap text-sm font-medium leading-5">
                                                <dt className="sr-only">Name</dt>
                                                <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd> 
                                                <dt className="sr-only">Twitter</dt>
                                                <dd>
                                                    {author.twitter && (
                                                        <Link 
                                                        href={author.twitter}
                                                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                                            {author.twitter.replace('https://twitter.com', '@')}
                                                        </Link>
                                                    )} 
                                                </dd>
                                            </dl>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </dl>
                        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb:0">
                            <div className="prose max-w-none pt-10 pb-8 dark:prose-dark"> {children}</div>
                        </div>
                    </div>
            </div>

        </article>
    )
}