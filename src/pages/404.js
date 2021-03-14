import React from "react"
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <div class="w-screen h-screen flex flex-col items-center justify-center overflow-y-auto">
    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 class="text-9xl text-center w-full font-medium text-gray-900">
          404
        </h3>
        <div class="mt-2">
          <p class="text-gray-500 text-3xl">
            Strona o takim adresie nie istnieje
          </p>
        </div>
      </div>
    </div>
    <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-center">
      <Link to="/" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
        Wróć na stronę główną!
      </Link>
    </div>
  </div>
)

export default NotFoundPage
