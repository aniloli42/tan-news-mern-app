export default function displayError(errorDiv) {
	const fadein = () => {
		errorDiv.current.style.display = 'flex'
		errorDiv.current.style.opacity = '0'
		setTimeout(() => {
			errorDiv.current.style.bottom = `20px`
			errorDiv.current.style.opacity = '1'
		}, 1000)
	}

	const fadeOut = () => {
		errorDiv.current.style.bottom = `0px`
		errorDiv.current.style.opacity = `0`
		setTimeout(() => {
			errorDiv.current.style.display = 'none'
		}, 1000)
	}

	return {
		fadeOut,
		fadein
	}
}
