<script setup>
import {ref} from "vue";

const error = ref('');
const theValue = ref('user');

const theInput = ($event) => {
    theValue.value = $event.target.value
    if (theValue.value.length < 5) {
        error.value = "Must be greater than 5 chars"
    } else {
        error.value = ''
    }
}
</script>

<template>
    <div class="lg:px-20 lg:py-16">
        <div class="relative flex items-center">
            <div
                class="absolute px-12 md:p-20 w-full text-2xl md:text-5xl text-white font-black font-serif uppercase">
                <div>Get in touch</div>
                <div>with us</div>
                <div>Cupbook - your secret place</div>
            </div>
            <img src="@/images/photo25.jpeg" alt="contact us" class="w-full h-72 object-cover"/>
        </div>

        <div class="mt-6 lg:mt-12 px-12 lg:border lg:border-gray-100 lg:shadow-md lg:shadow-gray-300">
            <div class="py-6 text-center text-gray-500 text-xs">For any question, please complete the form below.
                Alternatively email our team assistant on support@cupbook.com
            </div>
            <div class="flex flex-col md:flex-row justify-between lg:space-x-28 md:space-x-4 space-y-6 md:space-y-0">
                <div class="w-full">
                    <label for="company-website"
                           class="block text-sm font-bold leading-6 text-gray-900">Last Name
                        <span class="text-red-600 font-black text-md ml-1">*</span>
                    </label>
                    <div class="mt-2 lg:ml-4 flex rounded-md shadow-sm">
                        <span
                            class="inline-flex items-center rounded-l-md border border-r-0 border-gray-500 px-4 text-gray-500 sm:text-sm">
                            <i class="fa-solid fa-user text-gray-700 text-lg"></i>
                        </span>
                        <input v-bind:value="theValue"
                               v-on:input="theInput"
                               type="text"
                               name="company-website"
                               id="company-website"
                               class="block pl-4 w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-500 focus:ring-1 focus:ring-inset focus:ring-cinnamonMilkDark sm:text-sm sm:leading-6"
                        >
                    </div>
                    <div class="text-xs mt-2 text-red-700">{{error}}</div>
                </div>
                <div class="w-full">
                    <label for="company-website"
                           class="block text-sm font-bold leading-6 text-gray-900">First Name
                        <span class="text-red-600 font-black text-md ml-1">*</span>
                    </label>
                    <div class="mt-2 lg:ml-4 flex rounded-md shadow-sm">
                        <span
                            class="inline-flex items-center rounded-l-md border border-r-0 border-gray-500 px-4 text-gray-500 sm:text-sm">
                            <i class="fa-solid fa-user text-gray-700 text-lg"></i>
                        </span>
                        <input type="text" name="company-website" id="company-website"
                               class="block pl-4 w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-500 focus:ring-1 focus:ring-inset focus:ring-cinnamonMilkDark sm:text-sm sm:leading-6"
                        >
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col md:flex-row justify-between lg:space-x-28 md:space-x-4 space-y-6 md:space-y-0 py-6">
                <div class="w-full">
                    <label for="company-website"
                           class="block text-sm font-bold leading-6 text-gray-900">Email
                        <span class="text-red-600 font-black text-md ml-1">*</span>
                    </label>
                    <div class="mt-2 lg:ml-4 flex rounded-md shadow-sm">
                        <span
                            class="inline-flex items-center rounded-l-md border border-r-0 border-gray-500 px-4 text-gray-500 sm:text-sm">
                            <i class="fa-solid fa-envelope text-gray-700 text-lg"></i>
                        </span>
                        <input type="text" name="company-website" id="company-website"
                               class="block pl-4 w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-500 focus:ring-1 focus:ring-inset focus:ring-cinnamonMilkDark sm:text-sm sm:leading-6"
                        >
                    </div>
                </div>
                <div class="w-full">
                    <label for="company-website"
                           class="block text-sm font-bold leading-6 text-gray-900">Phone Number
                        <span class="text-red-600 font-black text-md ml-1">*</span>
                    </label>
                    <div class="mt-2 lg:ml-4 flex rounded-md shadow-sm">
                        <span
                            class="inline-flex items-center rounded-l-md border border-r-0 border-gray-500 px-4 text-gray-500 sm:text-sm">
                            <i class="fa-solid fa-user text-gray-700 text-lg"></i>
                        </span>
                        <input type="text" name="company-website" id="company-website"
                               class="block pl-4 w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-500 focus:ring-1 focus:ring-inset focus:ring-cinnamonMilkDark sm:text-sm sm:leading-6"
                        >
                    </div>
                </div>
            </div>
            <div class="py-6">
                <label for="comment"
                       class="block text-sm font-bold leading-6 text-gray-900">Let’s talk!
                    <span class="text-red-600 font-black text-md ml-1">*</span>
                </label>
                <div class="mt-2 lg:pl-4">
                    <textarea rows="4"
                              name="comment"
                              id="comment"
                              class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-cinnamonMilkDark sm:text-sm sm:leading-6"></textarea>
                </div>
            </div>

            <button type="button"
                    class="w-full mb-6 rounded-md bg-cinnamonMilkDarker px-3.5 py-3 text-md font-semibold text-black shadow-sm hover:bg-cinnamonMilkDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cinnamonMilk"
            >Submit
            </button>
        </div>

        <div class="flex flex-col items-center space-y-6 mt-12 mx-8">
            <div class="font-black text-4xl">Subscribe to CupBook Newsletter</div>
            <div class="font-semibold text-gray-500 text-md">Be the first to know about CupBook new arrivals and
                exclusive offers.
            </div>
            <input type="email"
                   name="email"
                   id="email"
                   class="block w-full lg:w-1/3 border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-600 placeholder:font-semibold placeholder:text-lg focus:ring-1 focus:ring-inset focus:ring-cinnamonMilkDark sm:text-sm sm:leading-6"
                   placeholder="Email">
        </div>
    </div>
</template>

<style scoped>

</style>