import React from 'react';
import './LayoutPostsStyle.css';
import PostList from '../../components/posts/PostList'


function LayoutPosts(props) {

  
  return (
    <React.StrictMode>
      <header className="header-principal">
        { props.children[0] }
      </header>
      <main className="content-post">

        {/* List of Left */}
        <section className="left">
          { props.children[1] }
          
          {/* List of Posts */}
          <PostList />
          
        </section>

        {/* List of Right */}
        <section className="right">
          <aside id="sidebar">
            
          </aside>
        </section>
      </main>
    </React.StrictMode>
  )
}

export default LayoutPosts;