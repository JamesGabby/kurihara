/* eslint-disable react/no-danger */

import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { format } from 'date-fns'

import Layout from './base-layout'

const Article = styled.article``

const Content = styled.div``

const Timestamp = styled.div`
  color: #777;
  font-weight: 600;
`

class BlogPostTemplate extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }).isRequired,
  }

  render() {
    const { data } = this.props
    const { markdownRemark: post } = data

    const publishDate = new Date(post.frontmatter.publish_date)
    return (
      <Layout>
        <Article>
          <h1>{post.frontmatter.title}</h1>
          <Content>
            <Timestamp>
              <time dateTime={post.frontmatter.publish_date}>
                {format(publishDate, 'YYYY-MM-DD')}
              </time>
            </Timestamp>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Content>
        </Article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        publish_date
      }
    }
  }
`
