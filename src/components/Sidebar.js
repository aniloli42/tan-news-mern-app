import React from "react"
import { Popular } from "./Popular"

export default function Sidebar() {
  return (
    <>
      <div className="sidebar-div">
        {/* <!-- search div --> */}
        <div className="search-div">
          <div className="search-title focus-title">Search</div>
          <form method="GET">
            <input
              type="text"
              name="searchtext"
              id="searchtext"
              placeholder="Enter Text"
            />
            <button type="submit">Search</button>
          </form>
        </div>

        {/* Popular Div */}
        <Popular />
      </div>
    </>
  )
}
