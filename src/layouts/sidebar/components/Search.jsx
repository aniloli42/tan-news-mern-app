import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router'
import useGlobal from '../../../context/globalContext'

const Search = () => {
	const { showError, updateSearch, searchText: Text } = useGlobal()
	const history = useHistory()
	const searchText = useRef(null)
	let searchedText = ""


	useEffect(() => {
		console.log(Text)
		history.push('/search')

		// eslint-disable-next-line
	}, [Text])

	const handleSearch = e => {
		e.preventDefault()

		if (
			searchText.current.value === '' ||
			searchText.current.value === undefined
		) {
			return showError("Search is blank")
		}

		searchedText = searchText.current.value

		updateSearch(searchedText)

		searchText.current.blur()
	}

	return (
		<>
			<div className="search-div">
				<div className="search-title focus-title">Search</div>
				<form onSubmit={handleSearch}>
					<input type="text" placeholder="Enter Text" ref={searchText} />
					<button type="submit">Search</button>
				</form>
			</div>
		</>
	)
}

export default Search