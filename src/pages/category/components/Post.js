import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Post(props) {
  // destructing the props
  const {
    title,
    author,
    image: propsImage,
    description,
    publishedAt,
    url,
  } = props

  const [image, setImage] = useState(() => {
    return "/imgs/default.jpg"
  })

  useEffect(() => {
    const setPropsImage = async () => {
      if (propsImage == null) return
      setImage(propsImage)
    }

    setPropsImage()

    //eslint-disable-next-line
  }, [])

  // check passed description is null and used to shorten the description to length of 180
  const descriptionMaker = (desc) => {
    if (desc == null) return "..."
    if (desc.length < 180) return desc
    return desc.slice(0, 180) + "..."
  }

  return (
    <article className="post-div">
      <Link to="/post/:id">
        <img src={image} alt="TAN NEWS FROM NEWS API" />
      </Link>
      <div className="post-meta">
        <h2 title={title}>
          <Link to="/post/:id">
            {title.length > 100 ? title.slice(0, 100) + "..." : title}
          </Link>
        </h2>
        <div className="post-attributes">
          <div className="post-author">
            <img src="/imgs/user.svg" alt="user svg" />
            {author ?? "Unknown"}
          </div>
          <div className="post-date">
            <img src="/imgs/clock.svg" alt="clock svg" />
            {publishedAt}
          </div>
        </div>
        <p className="post-desc">{descriptionMaker(description)}</p>

        <a
          href={url}
          className="post-btn"
          target="_blank"
          rel="noreferrer nofollow"
        >
          Read More
        </a>
      </div>
    </article>
  )
}
