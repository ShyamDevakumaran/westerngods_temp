import React from 'react';
import SortingFilter from './SortingFilter';
import Breadcrumb from '../BreadCrumb/BreadCrumb';

const SelectFilter = ({ options, value, onChange, rate, setrate, placeholder = 'Select an option', label }) => {

  return (
    <>
      <div className="mb-4 lg:mx-10 items-end justify-between space-y-1 sm:flex sm:space-y-0 md:mb-8">
        <div>
          <Breadcrumb />
          <h2 className="mt-5 text-xl font-testfont font-semibold text-gray-900 dark:text-white sm:text-2xl">Products</h2>
        </div>
        <div className="flex items-center text-center font-testfont space-x-1">
          <div style={{ position: "flex" }}>
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-700 "
            >
              <option value="" disabled className="cursor-pointer font-testfont">{placeholder}</option>
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex space-x-4   ">
            <div style={{ position: "relative" }}>
              <SortingFilter rate={rate} setrate={setrate} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectFilter;