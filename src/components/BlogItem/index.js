import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = blogItem

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-container">
        <div className="image-div">
          <img src={imageUrl} alt="topic-pic" className="topic-image" />
        </div>
        <div className="details-div">
          <p className="topic-text">{topic}</p>
          <h1 className="title-text">{title}</h1>
          <div className="author-div">
            <div className="avatar-div">
              <img src={avatarUrl} alt="avatar" className="author-avatar" />
            </div>
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
