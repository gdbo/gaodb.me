/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { MDXProvider } from '@mdx-js/react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import { IconContext } from "react-icons";
import { FaTags } from 'react-icons/fa';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function BlogPostItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false
  } = props;
  const {
    date,
    permalink,
    tags,
    readingTime
  } = metadata;
  const {
    author,
    title,
    image,
    keywords
  } = frontMatter;
  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL = frontMatter.author_image_url || frontMatter.authorImageURL;
  const imageUrl = useBaseUrl(image, {
    absolute: true
  });

  const renderAvatar = () => {
    return (
      <div className="avatar margin-vert--md">
        {authorImageURL && <a className="avatar__photo-link avatar__photo" href={authorURL} target="_blank" rel="noreferrer noopener">
            <img src={authorImageURL} alt={author} />
          </a>}
        <div className="avatar__intro">
          {author && <>
              <h4 className="avatar__name">
                <a href={authorURL} target="_blank" rel="noreferrer noopener">
                  {author}
                </a>
              </h4>
              <small className="avatar__subtitle">{authorTitle}</small>
            </>}
        </div>
      </div>
    )
  }

  const renderTags = () => {
    return (
      tags.length > 0 && 
        <footer className={clsx("row", "margin-bottom--lg", isBlogPostPage ? "margin-vert--md" : "margin-vert--lg", isBlogPostPage ? "text--center" : "")}>
          <div className="col">
            <IconContext.Provider value={{ className: "tags__icon" }}>
              <strong>
                <FaTags />
              </strong>
            </IconContext.Provider>
            {tags.map(({label, permalink: tagPermalink}) => 
            <Link key={tagPermalink} className="post__tags margin-horiz--sm" to={tagPermalink}>
              {label}
            </Link>)}
          </div>
        </footer>
    )
  }

  const renderPostTime = () => {
    const match = date.substring(0, 10).split('-');
    const year = match[0];
    const month = MONTHS[parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);

    return (
      <div className="col text--center">
        <time dateTime={date} className={styles.blogPostDate}>
          {month} {day}, {year}{' '}
          {readingTime && <> · {Math.ceil(readingTime)} min read</>}
        </time>
      </div>
    );
  };

  const renderIndexTime = () => {
    const match = date.substring(0, 10).split('-');
    const year = match[0];
    const month = parseInt(match[1], 10);
    const day = parseInt(match[2], 10);

    return (
      <div className="post__date">
        <div className="post__day">{day}</div>
        <div className="post__year_month">
          {year}年{month}月
        </div>
      </div>
    );
  }

  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    return <header>
        <TitleHeading className={clsx('margin-bottom--sm', styles.blogPostTitle, isBlogPostPage ? "text--center" : "")}>
          {isBlogPostPage ? title : <Link to={permalink} className={clsx(styles.blogPostTitleLink)}>{title}</Link>}
        </TitleHeading>
        <div className="margin-vert--md">
          {isBlogPostPage && renderPostTime()}
          {renderTags()}
        </div>
      </header>;
  };

  const renderReadMore = () => {
    return (
      truncated && 
          <div className="col text--right">
            <Link to={metadata.permalink} aria-label={`Read more about ${title}`}>
              <strong>Read More</strong>
            </Link>
          </div>
    )
  }

  return <>
      <Head>
        {keywords && keywords.length && <meta name="keywords" content={keywords.join(',')} />}
        {image && <meta property="og:image" content={imageUrl} />}
        {image && <meta name="twitter:image" content={imageUrl} />}
        {image && <meta name="twitter:image:alt" content={`Image for ${title}`} />}
      </Head>

      <div className="row">
        {!isBlogPostPage &&
        <div className="col col--2 padding-right--lg margin-bottom--lg">
          {renderIndexTime()}
        </div>}

        <div className={`col ${isBlogPostPage ? `col--12` : `col--10 post__border`}`}>
          <article className={!isBlogPostPage ? 'margin-bottom--md' : undefined}>
            {renderPostHeader()}
            <section className="markdown">
              <MDXProvider components={MDXComponents}>{children}</MDXProvider>
            </section>
            {renderReadMore()}
          </article>
        </div>
      </div>
    </>;
}

export default BlogPostItem;