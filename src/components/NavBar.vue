<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <header>
        <!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

        <!--    <div class="wrapper">-->
        <!--      <nav>-->
        <!--        <RouterLink to="/">Home</RouterLink>-->
        <!--        <RouterLink to="/about">About</RouterLink>-->
        <!--      </nav>-->
        <!--    </div>-->



        <!----------------- MOBILE---------------->
        <nav class="bg-dark-ecstasy block xl:hidden">
            <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 bg-ecstasy">
                <div class="flex h-16 items-center justify-between">
                    <img alt="logo" class="w-40 h-24" src="@/images/second-nav-logo.svg" width="125" height="125"/>

                    <div class="-mr-2 flex xl:hidden">
                        <!-- Mobile menu button -->
                        <button type="button"
                                class="relative inline-flex items-center justify-center rounded-md p-1 text-cinnamonMilkDark hover:bg-cinnamonMilkDark hover:text-dark-tile focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cinnamonMilkDark"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                        >
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            <!--
                              Icon when menu is closed.

                              Menu open: "hidden", Menu closed: "block"
                            -->
                            <svg class="block h-12 w-12" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <!--
                              Icon when menu is open.

                              Menu open: "block", Menu closed: "hidden"
                            -->
                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="xl:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-6 bg-tile">
                    <a href="#" class="block rounded-md bg-cinnamonMilkDark px-3 py-2 text-lg font-medium text-dark-tile">Home</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-lg font-medium text-cinnamonMilkDark hover:bg-cinnamonMilkDark hover:text-dark-tile">Books</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-lg font-medium text-cinnamonMilkDark hover:bg-cinnamonMilkDark hover:text-dark-tile">Events</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-lg font-medium text-cinnamonMilkDark hover:bg-cinnamonMilkDark hover:text-dark-tile">About Us</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-lg font-medium text-cinnamonMilkDark hover:bg-cinnamonMilkDark hover:text-dark-tile">Contact</a>
                </div>
            </div>
        </nav>




        <!----------------- DESKTOP---------------->
        <div class="relative hidden xl:block">
            <div class="flex justify-center bg-tile text-xl text-cinnamonMilkDark py-3.5">
                Sign up and enjoy 10% discount on all your purchases
            </div>
            <div class="flex flex-row justify-between items-center bg-ecstasy px-12 font-serif">
                <div class="text-white text-3xl">CupBook</div>
                <div class="flex flex-row space-x-6 text-white py-2">
                    <div class="flex flex-col items-center">
                        <i class="fa-solid fa-flag-usa"></i>
                        <div>English</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-solid fa-user"></i>
                        <div>Sign in</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-solid fa-heart"></i>
                        <div>Wishlist</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <div>Cart</div>
                    </div>
                </div>
            </div>
            <div class="bg-cinnamonMilkDark md:pb-32">
                <div class="flex flex-row justify-between px-32">
                    <img alt="logo" class="w-80 h-48" src="@/images/first-nav-logo.svg" width="125" height="125"/>
                    <img alt="logo" class="w-2/3 h-48" src="@/images/second-nav-logo.svg" width="125" height="125"/>
                </div>
                <div class="flex flex-row">
                    <img alt="logo" class="absolute raft-libra-01  w-96" src="@/images/raft-me-libra.svg"/>
                    <img alt="logo" class="absolute raft-llambe top-80 right-80  w-96 h-80"
                         src="../images/raft-me-llambe.svg"/>
                    <img alt="logo" class="absolute raft-lule" src="../images/raft-me-lule.svg"/>
                    <img alt="logo" class="absolute vazo-lule w-40" src="@/images/vazo-luleje.svg"/>
                    <img alt="logo" class="hidden md:block absolute raft-libra-02 w-96"
                         src="@/images/raft-me-libra.svg"/>
                    <img alt="logo" class="hidden md:block  absolute raft-libra-03 top-80 -right-0 w-96"
                         src="@/images/raft-me-libra.svg"/>
                    <img alt="logo" class="absolute mace-gri h-28 z-50" src="@/images/mace-gri.svg"/>
                </div>
            </div>
            <div class="relative grid grid-cols-5 gap-20 items-center justify-center py-2.5 px-40 bg-dark-ecstasy">
                <div class="uppercase font-bold text-2xl font-serif text-cinnamonMilkDark">Home</div>
                <div class="uppercase font-bold text-2xl font-serif text-cinnamonMilkDark">Books</div>
                <div class="uppercase font-bold text-2xl font-serif text-cinnamonMilkDark">Events</div>
                <div class="uppercase font-bold text-2xl font-serif text-cinnamonMilkDark">About us</div>
                <div class="uppercase font-bold text-2xl font-serif text-cinnamonMilkDark">Contact</div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.raft-libra-01 {
    top: 22rem;
    left: -3rem;
}

.raft-libra-02 {
    top: 22rem;
    left: 55rem;
}

.raft-llambe {
    top: 16rem;
    left: 10rem;
}

.vazo-lule {
    top: 15.5rem;
    left: 28rem;
}

.raft-lule {
    top: 19.8rem;
    right: 0rem;
    height: 8rem;
}

.raft-libra-03 {
    top: 22rem;
    left: 35rem;
}

.mace-gri {
    z-index: 50;
    top: 24.27rem;
    right: 4.2rem;
}
</style>
