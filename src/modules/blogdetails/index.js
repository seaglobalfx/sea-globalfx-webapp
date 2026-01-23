import React from 'react'
import BlogdetailsBanner from './blogdetailsBanner'
import TableofContents from './tableofContents'
import BlogList from '../blog/blogList'

export default function BlogDetails() {
    return (
        <div>
            <BlogdetailsBanner />
            <TableofContents />
            <BlogList />
        </div>
    )
}
