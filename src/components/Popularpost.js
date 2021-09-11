import React, { useState, useEffect } from 'react'

export const Popularpost = props => {
	// destructing the props
	const { title, author, image: propsImage, url } = props

	const [image, setImage] = useState(() => {
		return '/imgs/default.jpg'
	})

	useEffect(() => {
		const setPropsImage = async () => {
			if (propsImage == null) return
			setImage(propsImage)
		}

		setPropsImage()

		//eslint-disable-next-line
	}, [])

	return (
		<>
			<article className="post-div">
				<a href={url}>
					<img src={image} alt="TAN NEWS FROM NEWS API" />
				</a>
				<div className="post-meta">
					<h2 title={title}>
						<a href={url}>
							{title.length > 100 ? title.slice(0, 60) + '...' : title}
						</a>
					</h2>
					<div className="post-attributes">
						<div className="post-author">
							<img src="/imgs/user.svg" alt="user svg" />
							{author ?? 'Unknown'}
						</div>
					</div>
				</div>
			</article>
		</>
	)
}
