import React from 'react'
import { Outlet, Link } from "react-router-dom";
function Home() {
  return (
    <>
    <div><h1>Welcome to the Home Page</h1></div>
    <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/head&tail">HeadTail</Link>
          </li>
    </>
  )
}

export default Home


