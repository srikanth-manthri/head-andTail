import { Outlet, Link } from "react-router-dom";

const Main = () => {
  return (
    <>
  
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Main</Link>
          </li> */}
          <li>
            <Link to="/home">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/head&tail">HeadTail</Link>
          </li> */}
         
        </ul>
      </nav>

      <Outlet />
    


    </>
  )
};
export default Main;