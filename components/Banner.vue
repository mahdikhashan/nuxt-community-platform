<template>
  <div class="flex flex-col justify-center items-center bg-blue-900 py-[4.5rem]">
    <div class="w-2/3 items-center justify-center">
      <h1 class="text-white text-2xl xl:text-4xl text-center">Community Platform</h1>
      <h4 class="text-white text-md xl:px-32 pt-4 text-center">
        Answers to all your Expensify questions. Find support for user and admin
        questions from the Expensify Community.
      </h4>
      <div class="flex w-full items-center justify-center mt-4">
        <form class="w-full xl:w-2/3 flex flex-row">
          <div class="flex flex-auto relative items-center pt-4">
            <span class="translate-x-9 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  d="M10.01 4.543c-3.036 0-5.496 2.453-5.496 5.48 0 3.027 2.46 5.48 5.496 5.48 3.034 0 5.495-2.453 5.495-5.48 0-3.027-2.46-5.48-5.495-5.48m10.647 16.072l-.024.025c-.043.043-.09.083-.14.12-.518.388-1.254.287-1.712-.17l-4.819-4.82a6.988 6.988 0 01-3.95 1.218C6.14 16.988 3 13.857 3 9.994S6.14 3 10.011 3c3.874 0 7.013 3.131 7.013 6.994 0 1.47-.458 2.835-1.236 3.962l4.805 4.806c.504.505.556 1.337.064 1.853"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
              </svg>
            </span>
            <input
              ref="search"
              type="search"
              name="search"
              placeholder="Search"
              class="w-full p-2 pl-14 rounded-l-md"
            />
            <button class="w-2/12 bg-transparent hover:bg-green-500 rounded-r-md p-2 text-white">Search</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>