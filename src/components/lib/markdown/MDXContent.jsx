import path from "path";
import { readFileSync } from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import readTime from "reading-time";
import rehypePrettyCode from "rehype-pretty-code";

export default class MDXContent {
    constructor(folderName) {
        this.POST_PATH = path.join(process.cwd(), folderName);
    }
}