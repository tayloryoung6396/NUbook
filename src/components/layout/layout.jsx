import React from 'react'

import Header from '../header/header'
import Markdown from '../markdown/markdown'
import SEO from '../seo'

import ArticleHeader from './article-header'
import ArticleNavigation from './article-navigation/article-navigation'

const Layout = ({ children, data, pageContext }) => {
  const { title, description } = data.mdx.frontmatter
  const { next, previous, menu } = pageContext
  return <>
    <SEO
      title={title}
      description={description}
    />
    <Header menu={menu} />
    <div className='container pt-24 pb-16'>
      <ArticleHeader title={title} description={description} />
      <Markdown>{ children }</Markdown>
      <ArticleNavigation next={next} previous={previous} />
    </div>
  </>
}

export default Layout
