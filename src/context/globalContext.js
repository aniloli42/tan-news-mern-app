import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export default function useGlobal() {
	return useContext(GlobalContext)
}

export function GlobalProvider({ children }) {
	const pageSize = 8

	const [displayError, setDisplayError] = useState(() => false)
	const [errorText, setErrorText] = useState('Something went wrong')
	const [searchText, setSearchText] = useState(null)

	const showError = text => {
		setErrorText(text)
		setDisplayError(prevDisplay => {
			if (!prevDisplay) return true
		})
		setTimeout(() => {
			setDisplayError(false)
		}, 4000)
	}

	const updateSearch = text => {
		setSearchText(text)
	}

	const globalValue = {
		pageSize,
		displayError,
		errorText,
		showError,
		searchText,
		updateSearch
	}

	return (
		<GlobalContext.Provider value={globalValue}>
			{children}
		</GlobalContext.Provider>
	)
}
