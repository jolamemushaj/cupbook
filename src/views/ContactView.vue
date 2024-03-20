<script setup>
import {computed, ref} from "vue";

const form = ref({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
});
const formSubmitted = ref(false);
const successMessage = ref('');


const formErrors = computed(() => {
    return {
        lastName: formSubmitted.value && form.value.lastName.length < 3 ? "Must be greater than 2 chars" : '',
        firstName: formSubmitted.value && form.value.firstName.length < 3 ? "Must be greater than 2 chars" : '',
        email: formSubmitted.value && form.value.email.length < 3 ? "Must be greater than 2 chars" : '',
        phone: formSubmitted.value && form.value.phone.length < 3 ? "Must be greater than 2 chars" : '',
    }
})

const submit = () => {
    formSubmitted.value = true;
    if (Object.values(formErrors.value).every((v) => v === '')) {
        successMessage.value = 'Thank you for your message! We will get back to you soon.';

        setTimeout(() => {
            form.value.lastName = '';
            form.value.firstName = '';
            form.value.email = '';
            form.value.phone = '';
            formSubmitted.value = false;
            successMessage.value = '';
        }, 3000);
    }
}



const newsletterEmail = ref('');
const newsletterSubmitted = ref(false);
const newsletterSuccessMessage = ref('');

const newsletterEmailErrors = computed(() => {
    return newsletterSubmitted.value && newsletterEmail.value.length < 3 ? "Must be greater than 2 chars" : '';
})

const subscribe = () => {
    newsletterSubmitted.value = true;
    if (newsletterEmail.value.length > 2) {
        newsletterSuccessMessage.value = 'Thank you for subscribing!';

        setTimeout(() => {
            newsletterEmail.value = '';
            newsletterSubmitted.value = false;
            newsletterSuccessMessage.value = '';
        }, 3000);
    }
}

</script>

<template>
    <div class="lg:px-20 lg:pt-16">
        <div class="relative flex items-center">
            <div
                class="absolute px-12 md:p-24 w-full text-3xl md:text-5xl text-white font-black font-primary uppercase">
                <div class="p-1">Get in touch</div>
                <div class="p-1">with us</div>
                <div class="p-1">Cupbook - your secret place</div>
            </div>
            <img loading="lazy" src="@/images/photo25.jpeg" alt="contact us" class="w-full h-80 object-cover"/>
        </div>

        <div class="mt-6 lg:mt-12 px-12 lg:border lg:border-gray-100 lg:shadow-md lg:shadow-gray-300">
            <div class="py-6 text-center text-stone-500 text-sm font-semibold">For any question, please complete the
                form below.
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
                        <input v-model="form.lastName"
                               type="text"
                               name="company-website"
                               id="company-website"
                               class="block pl-4 w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-500 focus:ring-1 focus:ring-inset focus:ring-cinnamon-dark sm:text-sm sm:leading-6"
                        >
                    </div>
                    <div class="mt-2 lg:ml-4 text-xs text-red-700">{{ formErrors.lastName }}</div>
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
                        <input v-model="form.firstName"
                               type="text"
                               name="company-website"
                               id="company-website"
                               class="block pl-4 w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-500 focus:ring-1 focus:ring-inset focus:ring-cinnamon-dark sm:text-sm sm:leading-6"
                        >
                    </div>
                    <div class="mt-2 lg:ml-4 text-xs text-red-700">{{ formErrors.firstName }}</div>
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
                        <input v-model="form.email"
                               type="text"
                               name="company-website"
                               id="company-website"
                               class="block pl-4 w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-500 focus:ring-1 focus:ring-inset focus:ring-cinnamon-dark sm:text-sm sm:leading-6"
                        >
                    </div>
                    <div class="mt-2 lg:ml-4 text-xs text-red-700">{{ formErrors.email }}</div>
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
                        <input v-model="form.phone"
                               type="text"
                               name="company-website"
                               id="company-website"
                               class="block pl-4 w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-500 focus:ring-1 focus:ring-inset focus:ring-cinnamon-dark sm:text-sm sm:leading-6"
                        >
                    </div>
                    <div class="mt-2 lg:ml-4 text-xs text-red-700">{{ formErrors.phone }}</div>
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
                              class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-cinnamon-dark sm:text-sm sm:leading-6"></textarea>
                </div>
            </div>

            <div v-if="successMessage" class="text-cinnamon bg-leaf text-center p-2 rounded-md mb-2">{{ successMessage }}</div>

            <button @click="submit"
                    type="button"
                    class="w-full mb-6 rounded-md bg-cinnamon-darker px-3.5 py-3 text-md font-semibold text-black shadow-sm hover:bg-cinnamon-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cinnamon"
            >Submit
            </button>
        </div>

        <div class="flex flex-col items-center space-y-4 mt-12 mx-12">
            <div class="font-black text-4xl">Subscribe to CupBook Newsletter</div>
            <div class="font-semibold text-gray-500 text-md">Be the first to know about CupBook new arrivals and
                exclusive offers.
            </div>
            <input v-model="newsletterEmail"
                   type="email"
                   name="email"
                   id="email"
                   class="block w-full lg:w-1/3 border-0 rounded-md py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-600 placeholder:font-semibold placeholder:text-lg focus:ring-1 focus:ring-inset focus:ring-cinnamon-dark sm:text-sm sm:leading-6"
                   placeholder="Email">
            <div class="text-xs text-red-700">{{ newsletterEmailErrors }}</div>

            <div v-if="newsletterSuccessMessage" class="text-cinnamon bg-leaf text-center p-2 rounded-md mb-2">{{ newsletterSuccessMessage }}</div>
            <button @click="subscribe"
                    type="button"
                    class="w-full lg:w-auto max-w-md mb-6 rounded-md bg-cinnamon-darker px-8 py-3 text-md font-semibold text-black shadow-sm hover:bg-cinnamon-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cinnamon"
            >Subscribe
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>