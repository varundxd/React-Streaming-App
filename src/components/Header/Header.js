import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStore } from "../../stored";
import NavUser from "./NavUser";

function Header() {
  const hederRef = useRef(null);
  const user = useStore((state) => state.user);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    const handleFixedHeader = () => {
      const header = hederRef.current;
      const sticky = header.offsetTop;

      if (header) {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleFixedHeader);

    return () => window.removeEventListener("scroll", handleFixedHeader);
  }, []);

  return (
    <div ref={hederRef} className="header">
      <div className="header-list">
        <Link to="/" className="header-logo">
          <box-icon color="#e74ccc" size="md" name="movie"></box-icon>
          <span>Streamify</span>
        </Link>
      </div>

      <div className="header-info">
        <Link className="header-search" to="/search">
          <box-icon size="md" color="#e7bc3c" name="search-alt-2"></box-icon>
        </Link>

        {user ? (
          <NavUser user={user} />
        ) : (
          <Link
            to="/login"
            className={`bnt-login ${loading ? "disabled-link" : ""}`}
          >
            Sign in
          </Link>

          
        )}

        
{/* {user ? (
          <NavUser user={user} />
        ) : (
          <Link
            to="/sign-up"
            className={`bnt-signup ${loading ? "disabled-link" : ""}`}
          >
            Sign Up
          </Link>

          
       )} */}
      </div>
    </div>
  );
}

export default Header;

// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";
// import { useStore } from "../../stored";
// import NavUser from "./NavUser";

// function Header() {
//   const hederRef = useRef(null);
//   const user = useStore((state) => state.user);
//   const loading = useStore((state) => state.loading);

//   useEffect(() => {
//     const handleFixedHeader = () => {
//       const header = hederRef.current;
//       const sticky = header.offsetTop;

//       if (header) {
//         if (window.pageYOffset > sticky) {
//           header.classList.add("sticky");
//         } else {
//           header.classList.remove("sticky");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleFixedHeader);

//     return () => window.removeEventListener("scroll", handleFixedHeader);
//   }, []);

//   return (
//     <div ref={hederRef} className="header">
//       <div className="header-list">
//         <Link to="/" className="header-logo">
//           <img
//             src="/Users/divyanshusrivastava/Desktop/project/Streamifynew/streamify/src/components/Header/logonew.png" 
//             alt="Streamify Logo"
//             style={{ width: "24px", height: "24px", marginRight: "5px" }}
//           />
//           <span>Streamify</span>
//         </Link>
//       </div>

//       <div className="header-info">
//         <Link className="header-search" to="/search">
//           <box-icon size="md" color="#e7bc3c" name="search-alt-2"></box-icon>
//         </Link>

//         {user ? (
//           <NavUser user={user} />
//         ) : (
//           <Link
//             to="/login"
//             className={`bnt-login ${loading ? "disabled-link" : ""}`}
//           >
//             Sign in
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;
