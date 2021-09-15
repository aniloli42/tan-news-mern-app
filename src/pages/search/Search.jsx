import React from 'react'
import Spinner from '../../components/Spinner'
import checkMoreNews from '../../helpers/checkMoreNews'

const Search = () => {
    return (
        <>
            <main className="main-post-div">
                <h2 className="focus-title">
                    {`Search: ${searchText}`}
                </h2>
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

                {!loading && (
                    <div className="post-switcher">
                        <button
                            disabled={
                                checkMoreNews(page, totalResults, pageSize)
                            }
                            onClick={loadMore}
                        >
                            {page ===
                                checkMoreNews(page, totalResults, pageSize)
                                ? 'No More News'
                                : 'Load More'}
                        </button>
                    </div>
                )}
            </main>
        </>
    )
}

export default Search
