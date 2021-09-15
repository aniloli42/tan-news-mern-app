import React from 'react'
import Search from './components/Search'
import Popular from './components/Popular'

export default function Sidebar() {
	return (
		<>
			<div className="sidebar-div">
				{/* <!-- search div --> */}
				<Search />

				{/* Popular Div */}
				<Popular />
			</div>
		</>
	)
}
