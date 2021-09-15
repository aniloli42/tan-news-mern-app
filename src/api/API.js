import axios from 'axios'
require('dotenv').config()

const API = axios.create({
	baseURL: `https://newsapi.org/v2`
})

const pageSize = 8

// get category related posts
export const getCategoryPosts = async ({
	country = 'in',
	category = 'general',
	page = 1
}) =>
	API.get(
		`/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&country=${country}&category=${category}&page=${page}&pageSize=${pageSize}`
	)

// get popular related posts
export const getPopularPosts = async () =>
	API.get(
		`/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&country=in&category=technology&page=1&pageSize=4`
	)

// Get the search posts
export const getSearchedPosts = async ({ searchQuery, page = 1 }) =>
	API.get(
		`/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&q=${searchQuery}&page=${page}&pageSize=${pageSize}`
	)
