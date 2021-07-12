import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const API_URL = `https://apis.ccbp.in/blogs/${id}`
    const response = await fetch(API_URL)
    const data = await response.json()

    const formattedBlogData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      id: data.id,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({blogData: formattedBlogData, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogData} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogData

    return (
      <>
        <h1 className="heading-title">{title}</h1>
        <div className="blog-details-container">
          <div className="author-div">
            <div className="avatar-div">
              <img src={avatarUrl} alt="avatar" className="author-avatar" />
            </div>
            <p className="author-name">{author}</p>
          </div>
          <div className="image-div">
            <img src={imageUrl} alt="topic-pic" className="topic-image" />
          </div>
          <p className="topic-description">{content}</p>
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-details-body">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
