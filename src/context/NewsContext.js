// import React, { createContext, useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

// const NewsContext = createContext()

// export default NewsContext

// export function NewsProvider({ children }) {
// 	const [newsArticles, setNewsArticles] = useState([])

// 	const [totalResults, setTotalResults] = useState(0)
// 	const [page, setPage] = useState(1)
// 	const [loading, setLoading] = useState(true)
// 	const [category, setCategory] = useState('general')

// 	const loadMore = () => {
// 		setPage(prevPage => prevPage + 1)
// 		setLoading(true)
// 	}

// 	const location = useLocation()

// 	useEffect(() => {
// 		setLoading(true)
// 		setNewsArticles([])
// 		setPage(1)
// 		if (location.pathname !== '/search') {
// 			setIncludeParams(`country=in&category=${category}&`)
// 		}
// 		document.body.scrollIntoView()

// 		//eslint-disable-next-line
// 	}, [location.pathname, category])

// 	useEffect(() => {
// 		const getNews = async () => {
// 			try {
// 				const fetchNews = await fetch(
// 					`https://newsapi.org/v2/top-headlines?${includeParams}apiKey=bd732aaa020f4dd2a31b2de5a87825d6&pageSize=${pageSize}&page=${page}`
// 				)

// 				const newsJSON = await fetchNews.json()
// 				setTotalResults(newsJSON.totalResults)

// 				setNewsArticles(prevNewsArticles => {
// 					return [...prevNewsArticles, ...newsJSON.articles]
// 				})

// 				setLoading(false)
// 			} catch (error) {
// 				console.log(error)
// 			}
// 		}

// 		getNews()

// 		//eslint-disable-next-line
// 	}, [category, page, searchText, includeParams])

// 	return (
// 		<NewsContext.Provider
// 			value={{
// 				newsArticles,
// 				loadMore,
// 				setNewsArticles,
// 				totalResults,
// 				page,
// 				setCategory,
// 				setLoading,
// 				setSearchText,
// 				setIncludeParams,
// 				capitalize,
// 				searchText,
// 				pageSize,
// 				loading
// 			}}
// 		>
// 			{children}
// 		</NewsContext.Provider>
// 	)
// }
