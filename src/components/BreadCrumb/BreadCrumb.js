import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <nav className="flex" ariaLabel="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
            <svg className="me-2.5 h-3 w-3" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
            </svg>
            <Link to="/" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2">Oils</Link>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Breadcrumbs = () => {
//     const location = useLocation();
//     const pathnames = location.pathname.split('/').filter((item) => item);

//     return (
//         <nav aria-label="breadcrumb" className="bg-gray-100 p-3 rounded-md w-full">
//             <ol className="flex space-x-2">
//                 {pathnames.length > 0 ? (
//                     <li className="text-gray-500">
//                         <Link to="/" className="hover:text-blue-600">Home</Link>
//                     </li>
//                 ) : (
//                     <li className="text-gray-500">Home</li>
//                 )}
//                 {pathnames.map((name, index) => {
//                     const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//                     const isLast = index === pathnames.length - 1;
//                     return isLast ? (
//                         <li key={name} className="text-gray-500">
//                             <span className="text-gray-500">/</span> {name.charAt(0).toUpperCase() + name.slice(1)}
//                         </li>
//                     ) : (
//                         <li key={name} className="text-gray-500">
//                             <span className="text-gray-500">/</span>
//                             <Link to={routeTo} className="hover:text-blue-600">
//                                 {name.charAt(0).toUpperCase() + name.slice(1)}
//                             </Link>
//                         </li>
//                     );
//                 })}
//             </ol>
//         </nav>
//     );
// };

// export default Breadcrumbs;
