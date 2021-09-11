import React, { useEffect, useState } from 'react'
import Post from './Post'
import Spinner from './Spinner'

export default function Posts(props) {
	const [newsArticles, setNewsArticles] = useState([])

	const [totalResults, setTotalResults] = useState(0)
	const [page, setPage] = useState(1)
	const [loading, setLoading] = useState(true)

	const pageSize = 8

	const capitalize = text => {
		return text.charAt(0).toUpperCase() + text.slice(1)
	}

	useEffect(() => {
		const getNews = async () => {
			document.title = `${capitalize(props.category)} Category | TAN NEWS`
			const fetchNews = await fetch(
				`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=bd732aaa020f4dd2a31b2de5a87825d6&pageSize=${pageSize}&page=${page}`
			)
			const newsJSON = await fetchNews.json()
			setTotalResults(newsJSON.totalResults)
			setNewsArticles(prevNewsArticles => {
				return [...prevNewsArticles, ...newsJSON.articles]
			})

			setLoading(false)
		}

		getNews()

		// eslint-disable-next-line
	}, [page])

	const loadMore = () => {
		setPage(prevPage => prevPage + 1)
		setLoading(true)
	}

	return (
		<>
			<main className="main-post-div">
				<h2 className="focus-title">{props.category} NEWS</h2>
				<div className="posts-div" id="postsDiv">
					{newsArticles?.map((element, index) => {
						return (
							<Post
								key={'mainArticles' + index}
								title={element.title}
								description={element?.description}
								image={element?.urlToImage}
								publishedAt={new Date(element?.publishedAt).toUTCString()}
								url={element?.url}
								author={element?.author}
							/>
						)
					})}
				</div>
				{loading && <Spinner />}

				<div className="post-switcher">
					<button
						disabled={page === Math.ceil(totalResults / pageSize)}
						onClick={loadMore}
					>
						{page === Math.ceil(totalResults / pageSize)
							? 'News Finished'
							: 'Load More'}
					</button>
				</div>
			</main>
		</>
	)
}

Posts.defaultProps = {
	category: 'general'
}

Posts.Prototype = {
	category: 'props.string'
}
