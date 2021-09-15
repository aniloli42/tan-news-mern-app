import React, { useRef } from 'react'
// import { useHistory } from 'react-router'
import useGlobal from '../../../context/globalContext'

const Search = () => {
	const { showError } = useGlobal()
	// const history = useHistory()
	const searchText = useRef(null)

	const handleSearch = e => {
		e.preventDefault()

		console.log(searchText.current.value === '')

		if (
			searchText.current.value === '' ||
			searchText.current.value === undefined
		) {
			return showError("Search is blank")
		}
		searchText.current.value = ''
		searchText.current.blur()
		// history.push('/search')
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