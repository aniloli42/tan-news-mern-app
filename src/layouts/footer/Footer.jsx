import React, { useEffect } from 'react'
import DisplayError from '../../components/DisplayError/DisplayError.jsx'
import useGlobal from '../../context/globalContext'


export default function Footer() {
	const { displayError } = useGlobal()
	useEffect(() => {
		const currentYear = new Date()
		document.getElementById('getYear').innerHTML = currentYear.getFullYear()
	})

	return (
		<>
			{displayError && <DisplayError />}
			<footer className="footer-container">
				<div className="footer-bottom focus-title" id="footerBottom">
					<p>
						Copyright &copy; TAN News <span id="getYear"></span>
					</p>
				</div>
			</footer>
		</>
	)
}
