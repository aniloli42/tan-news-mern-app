import React, { useEffect, useState } from 'react'
import { Popularpost } from './Popularpost'
import { getPopularPosts } from "./../../../api/API"

export default function Popular() {
	const [articles, setArticles] = useState(() => [])


	useEffect(() => {
		const getNews = async () => {

			try {
				const apiResponse = await getPopularPosts()

				if (apiResponse.status !== 200) {
					throw new Error('Something went wrong')
				}

				const { articles: Article } = apiResponse.data

				setArticles(Article)

			} catch (err) {
				console.log(err)
			}
		}

		getNews()

		// eslint-disable-next-line
	}, [])

	return (
		<>
			{/* <!-- popular div --> */}
			<div className="popular-div">
				<div className="popular-title focus-title"> Top Technology News</div>
				<div className="popular-post">
					{articles?.map((element, index) => {
						return (
							<Popularpost
								key={'popularPost' + index}
								title={element.title}
								image={element?.urlToImage}
								url={element?.url}
								author={element?.author}
							/>
						)
					})}
				</div>
			</div>
			{/* Popular Div End */}
		</>
	)
}
