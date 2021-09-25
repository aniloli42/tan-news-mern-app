import React, { useEffect, useState } from 'react'
import Spinner from '../../components/Spinner.js'
import Post from "../../components/Post"
import useGlobal from '../../context/globalContext.js'
import checkMoreNews from '../../helpers/checkMoreNews.js'
import { getSearchedPosts } from "../../api/API"
import { Redirect } from 'react-router'

const Category = ({ topics }) => {

    const { pageSize, searchText } = useGlobal()
    const [loading, setLoading] = useState(() => false)
    const [articles, setArticles] = useState(() => [])
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            async function getNews() {
                try {
                    setLoading(true)
                    const apiResponse = await getSearchedPosts({ searchText })

                    if (apiResponse.status !== 200) {
                        throw new Error('Something went wrong')
                    }

                    const { totalResults, articles } = apiResponse.data

                    setTotalNews(totalResults)

                    setArticles(prevArticles => [...prevArticles, ...articles])

                    setLoading(false)

                } catch (err) {
                    console.log(err)
                }
            }
            getNews()
        }, 2000)

        // eslint-disable-next-line
    }, [page, searchText])

    if (searchText === null || searchText === '' || searchText === undefined) {
        return <Redirect to="/" />
    }

    const loadMore = () => {
        setPage(prevPage => prevPage + 1)
    }

    return (
        <>
            <main className="main-post-div">
                <h2 className="focus-title">
                    {`Search: ${searchText}`}
                </h2>
                <div className="posts-div" id="postsDiv">
                    {articles?.map((element, index) => {
                        return (
                            <Post
                                key={index}
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

                {!loading && (
                    <div className="post-switcher">
                        <button
                            disabled={checkMoreNews(page, pageSize, totalNews)}
                            onClick={loadMore}
                        >
                            {checkMoreNews(page, pageSize, totalNews)
                                ? 'No More News'
                                : 'Load More News'}
                        </button>
                    </div>
                )}
            </main>
        </>
    )
}

export default Category
