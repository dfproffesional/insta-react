import React from 'react'
import LayoutPosts from '../layout/posts/LayoutPosts';
import {PostHeader as Header} from '../components/posts/PostHeader';
import {PostHistorie as Histories} from '../components/posts/PostHistorie'
export default function PostsView() {
  return (
    <React.StrictMode>
      <LayoutPosts>
        <Header />
        <Histories />
      </LayoutPosts>
    </React.StrictMode>
  )
}
