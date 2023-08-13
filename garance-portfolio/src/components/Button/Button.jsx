import React from 'react'
import { Link } from 'react-router-dom'

export default function Button() {
  return (
    <Link
      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      data-ripple-light="true"></Link>
  );
}
