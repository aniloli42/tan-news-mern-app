import React, { useContext, useEffect } from 'react'
import { useLocation, Redirect } from 'react-router'

import Post from './Post'
import Spinner from './Spinner'
import NewsContext from '../Context/NewsContext'

export default function Posts({ category }) {
	const NewsItems = useContext(NewsContext)
	const location = useLocation()

	useEffect(() => {
		NewsItems.setCategory(category)
		document.title = `${NewsItems.capitalize(category)} Category | TAN NEWS`
		// eslint-disable-next-line
	}, [category])

	if (location.pathname === '/search') {
		if (NewsItems.searchText === '') {
			return <Redirect to="/" />
		}
		document.title = `Search: ${NewsItems.capitalize(
			NewsItems.searchText
		)} | TAN NEWS`
		NewsItems.setIncludeParams(`q=${NewsItems.searchText}&`)
	}

	return (
		<>
			<main className="main-post-div">
				<h2 className="focus-title">
					{location.pathname !== '/search'
						? `${category} NEWS`
						: `Search: ${NewsItems.searchText}`}
				</h2>
				<div className="posts-div" id="postsDiv">
					{NewsItems?.newsArticles?.map((element, index) => {
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
				{NewsItems.loading && <Spinner />}

				{!NewsItems.loading && (
					<div className="post-switcher">
						<button
							disabled={
								NewsItems.page ===
								Math.ceil(NewsItems.totalResults / NewsItems.pageSize)
							}
							onClick={NewsItems.loadMore}
						>
							{NewsItems.page ===
							Math.ceil(NewsItems.totalResults / NewsItems.pageSize)
								? 'News Finished'
								: 'Load More'}
						</button>
					</div>
				)}
			</main>
		</>
	)
}
