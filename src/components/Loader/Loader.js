import React from "react";
import { CgSpinner } from 'react-icons/cg';

const Loader = () => {
  return (
    <div className="fixed z-50">
      <div className="fixed inset-0 bg-gray-500/20 transition-opacity">
        <div className="flex h-screen items-center justify-center">
          <CgSpinner className="animate-spin text-3xl text-blue-600" />
        </div>
      </div>
    </div>
  )
}

export default Loader


