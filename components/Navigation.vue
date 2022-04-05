<template>
  <div class="flex bg-blue-900 items-center justify-between px-24 gap-4">
    <div class="flex gap-2 py-2">
      <nuxt-link to="/">
        <div class="w-36">
          <img
            src="https://us.v-cdn.net/6030147/uploads/D1BCSTA1KCGQ/expensify-community.png"
            alt="logo"
          />
        </div>
      </nuxt-link>
      <Link address="/discussions" v-if="isSearch">Discussions</Link>
      <Link address="/categories" v-if="isSearch">Categories</Link>
    </div>
    <div v-if="!isSearch" class="flex flex-auto relative items-center">
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
        class="w-full p-2 pl-14 rounded-md"
      />
    </div>
    <div class="flex items-center justify-center gap-1">
      <div class="relative">
        <button class="text-white hover:bg-blue-500 p-2 rounded-md" @click="enableSearch">
          <svg
            v-if="isSearch"
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
          <div v-else>Cancel</div>
        </button>
      </div>
      <div class="relative">
        <button class="text-white hover:bg-blue-500 p-2 rounded-md" @click="enableNotification">
          <div v-if="isNotification">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                d="M12.323 2c.374 0 .677.422.677.951v.115c3.334.457 5 3.196 5 5.934v3c0 1.618.942 3.235 2.826 4.853a.5.5 0 01.174.379V19.5a.5.5 0 01-.5.5l-6.5.001A2 2 0 0110 20H3.5a.5.5 0 01-.492-.41L3 19.5v-2.268c0-.146.064-.285.174-.38C5.058 15.236 6 13.619 6 12V9c0-2.739 1.667-5.477 5-5.934v-.108c0-.529.304-.958.677-.958h.646z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                d="M19.5 17.682c-1.961-1.787-3-3.68-3-5.682V9c0-2.31-1.4-4.132-3.703-4.448h-1.594C8.9 4.868 7.5 6.69 7.5 9v3c0 2.002-1.039 3.895-3 5.682v.818h15v-.818zM3.5 20a.5.5 0 01-.5-.5v-2.268c0-.146.064-.285.174-.38C5.058 15.235 6 13.618 6 12V9c0-2.739 1.667-5.477 5-5.934v-.108c0-.529.304-.958.677-.958h.646c.374 0 .677.422.677.951v.115c3.333.457 5 3.195 5 5.934v3c0 1.618.942 3.235 2.826 4.853a.5.5 0 01.174.379V19.5a.5.5 0 01-.5.5H14a2 2 0 11-4 0H3.5z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </button>
        <div
          v-if="isNotification"
          class="absolute bg-white rounded-md z-50 w-80 -translate-x-[17.5rem] shadow-md border-[2px]"
        >
          <div>
            <div class="flex items-center justify-between p-3 border-b-2">
              <span class="font-semibold">Notification</span>
              <nuxt-link to="/123">
                <div class="w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 18"
                    class="css-199ykvq-icon-settings icon-settings"
                    aria-hidden="true"
                  >
                    <title>Settings</title>
                    <path
                      d="M6,18v-.5a.5.5,0,0,1,.5-.5h4a.5.5,0,0,1,.5.5V18H22v2H11v.5a.5.5,0,0,1-.5.5h-4a.5.5,0,0,1-.5-.5V20H2V18Zm9-7v-.5a.5.5,0,0,1,.5-.5h4a.5.5,0,0,1,.5.5V11h2v2H20v.5a.5.5,0,0,1-.5.5h-4a.5.5,0,0,1-.5-.5V13H2V11ZM4,4V3.5A.5.5,0,0,1,4.5,3h4a.5.5,0,0,1,.5.5V4H22V6H9v.5a.5.5,0,0,1-.5.5h-4A.5.5,0,0,1,4,6.5V6H2V4ZM5,4V6H8V4Zm11,7v2h3V11ZM7,18v2h3V18Z"
                      transform="translate(-2 -3)"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </nuxt-link>
            </div>
            <div class="divide-y divide-slate-200">
              <div class="flex p-2 gap-2">
                <div class="w-2/12">
                  <img
                    class="rounded-full w-12 border"
                    src="https://images.v-cdn.net/ranks_100.png"
                    alt
                  />
                </div>
                <div class="flex flex-col w-10/12">
                  <p class="text-sm">Congratulations! You've been promoted to Expensify Newcomer.</p>
                  <time class="text-xs text-gray-500">May 7, 2022</time>
                </div>
              </div>
              <div class="flex p-2 gap-2">
                <div class="w-2/12">
                  <img
                    class="rounded-full w-12 border"
                    src="https://us.v-cdn.net/6030147/uploads/userpics/339/n79QMB5W92KR3.jpg"
                    alt
                  />
                </div>
                <div class="flex flex-col w-10/12">
                  <p class="text-sm">
                    <strong>Rachael Hopkins</strong> answered your question:
                    <strong>How can I connect expensify to my own custom dashboard?</strong>
                  </p>
                  <time class="text-xs text-gray-500">May 7, 2022</time>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between p-3 border-t-2">
              <nuxt-link to="/123">
                <b class="text-sm">All Notification</b>
              </nuxt-link>
              <button class="font-semibold text-blue-500 text-sm">Mark All Read</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button @click="enableMessage" class="text-white hover:bg-blue-500 p-2 rounded-md">
          <div v-if="isMessage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                d="M2 7.5l6.143 4.56C7.777 12.58 4.79 16.83 5 17c.225.18 4.346-3.966 4.346-3.966.015-.017.02-.04.02-.067l1.867 1.386a1.249 1.249 0 001.534 0l1.867-1.386c0 .027.005.05.02.067 0 0 4.121 4.147 4.346 3.966.21-.17-2.777-4.42-3.143-4.94L22 7.5v10a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 17.5v-10zm.242-1.817A1.5 1.5 0 013.5 5h17a1.5 1.5 0 011.258.683L12 13.05 2.242 5.683z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                d="M20.5 5A1.5 1.5 0 0122 6.5v11a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 17.5v-11A1.5 1.5 0 013.5 5h17zm0 2.339l-4.695 3.653.015.016S19.225 15.82 19 16c-.186.15-3.047-2.671-4.023-3.643l-.323-.323a.427.427 0 01-.06-.1l-1.827 1.42c-.451.35-1.083.35-1.534 0l-1.827-1.42a.427.427 0 01-.06.1l-.323.323C8.047 13.329 5.186 16.15 5 16c-.225-.18 3.18-4.992 3.18-4.992l.015-.016L3.5 7.339V17.5h17V7.339zM19.134 6.5H4.865L12 12.05l7.134-5.55z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </button>
        <div
          v-if="isMessage"
          class="absolute bg-white rounded-md z-50 w-80 -translate-x-[17.5rem] shadow-md border-[2px]"
        >
          <div>
            <div class="flex items-center justify-between p-3 border-b-2">
              <span class="font-semibold">Messages</span>
              <nuxt-link to="/123">
                <div class="w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="css-r63kgg-iconStyles-standard icon-compose"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M23.591,1.27l-.9-.9a1.289,1.289,0,0,0-1.807,0l-.762.863,2.6,2.587.868-.751a1.24,1.24,0,0,0,.248-.373,1.255,1.255,0,0,0,0-1.052A1.232,1.232,0,0,0,23.591,1.27ZM19.5,20.5H3.5V4.5H15.4l1.4-1.431H2.751A1,1,0,0,0,2,4.07V20.939a1,1,0,0,0,1,1H20.011a1,1,0,0,0,1-1V7L19.5,8.445ZM21.364,3.449l-9.875,9.8-.867-.861,9.874-9.8-.867-.863-4.938,4.9-4.938,4.9L8.74,15.167l3.617-1.055,9.875-9.8Z"
                    />
                  </svg>
                </div>
              </nuxt-link>
            </div>
            <div class="divide-y divide-slate-200">
              <p class="mx-4 my-8 text-sm text-gray-700">You do not have any messages yet.</p>
            </div>
            <div class="flex items-center justify-between p-3 border-t-2">
              <button class="font-semibold text-blue-500 text-sm">All Messages</button>
            </div>
          </div>
        </div>
      </div>
      <button 
        @click="enableProfile"
        class="hover:bg-blue-500 p-2 rounded-md">
        <img class="w-6 rounded-full m-2" src="avatar.jpg" />
        <div
          v-if="isProfile"
          class="absolute bg-white rounded-md z-50 w-[22rem] -translate-x-[19rem] shadow-md border-[2px]"
        >
          <div>
            <div class="flex flex-col items-center justify-between p-3 border-b-[2px]">
              <nuxt-link to="/123">
                <img class="w-24 rounded-full m-2" src="avatar.jpg" />
              </nuxt-link>
              <button class="font-semibold hover:text-blue-500">Mahdi.Khashan</button>
            </div>
            <div class="divide-y divide-slate-200 flex flex-col py-2">
              <button class="p-2 mb-2 text-sm text-gray-700 text-left hover:bg-blue-100">Edit Profile</button>
              <div class="flex flex-col">
                <p class="text-xs text-gray-500 py-2">DISCUSSIONS</p>
                <button class="p-2 text-sm text-gray-700 text-left hover:bg-blue-100 flex justify-between items-center"><p>Bookmarks</p><span class="text-xs">2</span></button>
                <button class="p-2 text-sm text-gray-700 text-left hover:bg-blue-100 flex justify-between items-center"><p>Drafts</p><span class="text-xs"></span></button>
                <button class="p-2 text-sm text-gray-700 text-left hover:bg-blue-100 flex justify-between items-center"><p>My Discussions</p><span class="text-xs">2</span></button>
              </div>
            </div>
            <div class="border-t-[2px] text-left flex py-2">
                <button class="p-2 text-sm w-full text-gray-700 text-left hover:bg-blue-100">Sign Out</button>
            </div>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      sticky: true,
      isSearch: false,
      isNotification: false,
      isMessage: false,
      isProfile: false,
    };
  },
  methods: {
    enableSearch() {
      this.isSearch = !this.isSearch;
      this.isNotification = false
      this.isMessage = false
      this.isProfile = false
      this.$nextTick(() => {
        this.$refs.search.focus();
      });
    },
    enableNotification() {
      this.isNotification = !this.isNotification;
      this.isSearch = true
      this.isMessage = false
      this.isProfile = false
    },
    enableMessage() {
      this.isMessage = !this.isMessage;
      this.isSearch = true
      this.isNotification = false
      this.isProfile = false
    },
    enableProfile() {
      this.isProfile = !this.isProfile;
    }
  },
};
</script>
