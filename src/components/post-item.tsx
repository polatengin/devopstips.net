import React from "react"

import { Link } from "gatsby"

export default ({ post }) => {
  return (
    <article className="my-6 text-gray-700 dark:text-gray-100" itemScope itemType="http://schema.org/Article">
      <header className="mb-3">
        <Link to={ `/${ post.frontmatter.path }` } className="hover:underline text-3xl">{ post.frontmatter.title }</Link>
        <p className="mt-3 text-xs text-gray-500 flex items-center">
          by
          <img width="16" height="16" className="inline rounded-full bg-gray-500 mx-1 w-4 h-4" alt={ post.frontmatter.author.name } src={ post.frontmatter.author.profilePictureUri } />
          <Link to={`/author/${post.frontmatter.author.alias}`} className="mr-1 text-blue-500">{ post.frontmatter.author.name }</Link>
          @ [<em>{post.frontmatter.date}</em>]
          <span className="mx-1">~ { post.frontmatter.time } read</span>
          · under
          { post.frontmatter.category.map((category, index) => {
            return <a key={ index } className={`text-xs p-1 ml-1 category-${ category }`} href="#">{ category }</a>;
          }) }
        </p>
      </header>
      <section>
        <p dangerouslySetInnerHTML={{ __html: post.frontmatter.description }} itemProp="description" />
      </section>
      <Link to={ `/${ post.frontmatter.path }` } className="text-blue-500 text-xs">Read more →</Link>
    </article>
  );
};
