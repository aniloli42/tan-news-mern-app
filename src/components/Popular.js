import React, { useEffect, useState } from 'react'
import { Popularpost } from './Popularpost'

export const Popular = () => {
	const [topArticles, setTopArticles] = useState([])

	const pageSize = 4

	useEffect(() => {
		const getNews = async () => {
			const fetchNews = await fetch(
				`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=bd732aaa020f4dd2a31b2de5a87825d6&pageSize=${pageSize}`
			)
			const newsJSON = await fetchNews.json()
			setTopArticles(newsJSON.articles)
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
					{topArticles?.map((element, index) => {
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
