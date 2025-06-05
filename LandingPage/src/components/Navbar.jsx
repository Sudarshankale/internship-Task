// import React from "react";
// import todoLogo from "../assets/do-List-logo.png";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           <img src={todoLogo} alt="Todo-logo" className="img-fluid logo" />
//         </a>

//         <div className="linkContainer">
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav">
//               <a className="nav-link active" aria-current="page" href="#">
//                 About Us
//               </a>
//               <a className="nav-link" href="#">
//                 Features
//               </a>
//               <a className="nav-link" href="#">
//                 More Option
//               </a>
//               <a className="nav-link " aria-disabled="true">
//                 Contact
//               </a>
//             </div>
//             <div className="btn-container">
//               <button class="btn btn-outline-danger" type="submit">
//                 Login
//               </button>
//               <button type="button" class="btn btn-danger">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
//   x;
// };

// export default Navbar;


import React from "react";
import todoLogo from "../assets/do-List-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={todoLogo} alt="Todo-logo" className="img-fluid logo" />
        </a>

        {/* Hamburger Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="linkContainer">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                About Us
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                More Option
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
            </div>

            <div className="btn-container">
              <button className="btn btn-outline-danger" type="submit">
                Login
              </button>
              <button type="button" className="btn btn-danger">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React from "react";
// import todoLogo from "../assets/do-List-logo.png";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         {/* Logo */}
//         <a className="navbar-brand" href="#">
//           <img src={todoLogo} alt="Todo List Logo" className="img-fluid logo" />
//         </a>

//         {/* Hamburger Toggle Button */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Collapsible Content */}
//         <div
//           className="collapse navbar-collapse justify-content-end"
//           id="navbarNavAltMarkup"
//         >
//           {/* Use flex utilities to stack vertically on small, horizontal on lg */}
//           <div className="d-flex flex-column flex-lg-row align-items-center gap-3">
//             <div className="navbar-nav">
//               <a className="nav-link active" aria-current="page" href="#">
//                 About Us
//               </a>
//               <a className="nav-link" href="#">
//                 Features
//               </a>
//               <a className="nav-link" href="#">
//                 More Options
//               </a>
//               <a className="nav-link" href="#">
//                 Contact
//               </a>
//             </div>

//             <div className="d-flex gap-2">
//               <button className="btn btn-outline-danger" type="button">
//                 Login
//               </button>
//               <button className="btn btn-danger" type="button">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
