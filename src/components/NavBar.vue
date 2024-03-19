<script setup>
import {RouterLink} from 'vue-router'
import {ref} from "vue";

const showMobileMenu = ref(false);
const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value;
}
</script>

<template>
    <header>
        <!----------------- MOBILE---------------->
        <nav class="block xl:hidden">
            <div class="mx-auto max-w-7xl px-8 py-4 bg-leaf">
                <div class="flex h-16 items-center justify-between">
                    <a href="/" class="relative text-cinnamon-dark text-4xl font-secondary">
                        cupbook
                    </a>
                    <div class="-mr-2 flex xl:hidden">
                        <!-- Mobile menu button -->
                        <button @click=toggleMobileMenu type="button"
                                class="relative inline-flex items-center justify-center rounded-md p-1 text-cinnamon-dark hover:text-cinnamon focus:outline-none"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                        >
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            <!--
                              Icon when menu is closed.

                              Menu open: "hidden", Menu closed: "block"
                            -->
                            <svg class="h-12 w-12"
                                 :class="{ 'hidden': showMobileMenu, 'block': !showMobileMenu }"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke-width="1.5"
                                 stroke="currentColor"
                                 aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                            <!--
                              Icon when menu is open.

                              Menu open: "block", Menu closed: "hidden"
                            -->
                            <svg class="h-12 w-12"
                                 :class="{ 'block': showMobileMenu, 'hidden': !showMobileMenu }"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke-width="1.5"
                                 stroke="currentColor"
                                 aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <Transition name="slide-fade">
                <div v-if="showMobileMenu" class="xl:hidden" id="mobile-menu">
                    <div class="space-y-1 px-4 pb-3 pt-6 bg-cinnamon-dark">
                        <RouterLink @click="toggleMobileMenu"
                                    to="/"
                                    class="font-primary font-black block rounded-md px-3 py-2 text-lg text-leaf-dark hover:bg-leaf hover:text-cinnamon"
                        >
                            Home
                        </RouterLink>
                        <a @click="toggleMobileMenu"
                           href="/#books"
                           class="font-primary font-black block rounded-md px-3 py-2 text-lg text-leaf-dark hover:bg-leaf hover:text-cinnamon"
                        >
                            Books
                        </a>
                        <a @click="toggleMobileMenu"
                           href="/#events"
                           class="font-primary font-black block rounded-md px-3 py-2 text-lg text-leaf-dark hover:bg-leaf hover:text-cinnamon"
                        >
                            Events
                        </a>
                        <RouterLink @click="toggleMobileMenu"
                                    to="/about"
                                    class="font-primary font-black block rounded-md px-3 py-2 text-lg text-leaf-dark hover:bg-leaf hover:text-cinnamon">
                            About Us
                        </RouterLink>
                        <RouterLink @click="toggleMobileMenu"
                                    to="/contact"
                                    class="font-primary font-black block rounded-md px-3 py-2 text-lg text-leaf-dark hover:bg-leaf hover:text-cinnamon">
                            Contact
                        </RouterLink>
                    </div>
                </div>
            </Transition>
        </nav>


        <!----------------- DESKTOP---------------->
        <div class="relative hidden xl:block ">
            <div class="flex justify-center bg-leaf text-2xl text-cinnamon-dark py-3.5 font-secondary">
                Sign up and enjoy 10% discount on all your purchases
            </div>
            <div class="flex flex-row justify-between items-center bg-ecstasy px-12 font-secondary">
                <a href="/" class="text-white text-3xl font-secondary">CupBook</a>
                <div class="flex flex-row space-x-6 text-white py-1">
                    <div class="flex flex-col items-center">
                        <i class="text-xl fa-solid fa-flag"></i>
                        <div class="text-sm font-light">English</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="text-xl fa-solid fa-user"></i>
                        <div class="text-sm font-light">Sign in</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="text-xl fa-solid fa-heart"></i>
                        <div class="text-sm font-light">Wishlist</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="text-xl fa-solid fa-cart-shopping"></i>
                        <div class="text-sm font-light">Cart</div>
                    </div>
                </div>
            </div>
            <div class="bg-cinnamon-dark md:pb-20">
                <div class="flex flex-row justify-between px-32">
                    <img alt="logo" class="w-72 h-40 pt-8" src="@/images/first-nav-logo.svg" width="125" height="125"/>

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 459 127"
                         class="w-2/3 h-52 pt-4"
                         xml:space="preserve"
                    >
                        <g>
                            <g>
                                <text transform="matrix(1 0 0 1 168.6172 121)" class="fill-leaf-darker font-primary text-[33px]">sip into stories</text>
                            </g>
                            <g>
                                <text transform="matrix(1.009 0 0 1 -3.906250e-03 78.293)" class="logo-stroke stroke-ecstasy fill-leaf font-secondary text-[104px]">CupBook</text>
                            </g>
                        </g>
                    </svg>


                </div>
                <div class="max-w-7xl mx-auto flex flex-row">
                    <img alt="logo" class="absolute raft-libra-01 w-80" src="@/images/raft-me-libra-01.svg"/>
                    <img alt="logo" class="absolute raft-llambe w-64" src="../images/raft-me-llambe.svg"/>
                    <img alt="logo" class="absolute raft-lule" src="../images/raft-me-lule.svg"/>
                    <img alt="logo" class="absolute vazo-lule w-40" src="@/images/vazo-luleje.svg"/>
                    <img alt="logo" class="absolute raft-libra-02 w-96" src="@/images/raft-me-libra.svg"/>
                    <img alt="logo" class="absolute raft-libra-03 w-96" src="@/images/raft-me-libra.svg"/>
                    <img alt="logo" class="absolute raft-libra-04 w-80 hidden 2xl:block"
                         src="@/images/raft-me-libra-04.svg"/>
                    <img alt="logo" class="absolute mace-gri h-28 z-50" src="@/images/mace-gri.svg"/>
                </div>
            </div>
            <div class="relative items-center justify-center py-3 px-48 bg-ecstasy-dark">
                <div class="max-w-7xl mx-auto grid grid-cols-5 gap-16">
                    <RouterLink to="/"
                                class="font-bold text-2xl font-primary text-cinnamon-dark hover:text-white focus:text-white">
                        Home
                    </RouterLink>
                    <a href="#books"
                       class="font-bold text-2xl font-primary text-cinnamon-dark hover:text-white focus:text-white">Books
                    </a>
                    <a href="#events"
                       class="font-bold text-2xl font-primary text-cinnamon-dark hover:text-white focus:text-white">Events
                    </a>
                    <RouterLink to="/about"
                                class="font-bold text-2xl font-primary text-cinnamon-dark hover:text-white focus:text-white">
                        About us
                    </RouterLink>
                    <RouterLink to="/contact"
                                class="font-bold text-2xl font-primary text-cinnamon-dark hover:text-white focus:text-white">
                        Contact
                    </RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.raft-libra-01 {
    top: 20rem;
    left: -2rem;
}

.raft-libra-02 {
    top: 20.5rem;
    left: 55rem;
}

.raft-llambe {
    top: 20.4rem;
    left: 10rem;
}

.vazo-lule {
    top: 13.8rem;
    left: 25rem;
}

.raft-lule {
    top: 17.9rem;
    right: 0rem;
    height: 8rem;
}

.raft-libra-03 {
    top: 20.2rem;
    left: 33rem;
}

.raft-libra-04 {
    top: 19.8rem;
    left: 76rem;
}

.mace-gri {
    z-index: 50;
    top: 22.9rem;
    right: 5rem;
}

.logo-stroke {
    stroke-width: 4.2545;
    stroke-miterlimit: 10;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
