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


        <div class="relative">
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
            <div class="bg-cinnamonMilkDark pb-32">
                <div class="flex flex-row justify-between px-32">
                    <img alt="logo" class="w-80 h-48" src="@/images/first-nav-logo.svg" width="125" height="125"/>
                    <img alt="logo" class="w-2/3 h-48" src="@/images/second-nav-logo.svg" width="125" height="125"/>
                </div>
                <div class="flex flex-row">
                    <img alt="logo" class="absolute raft-libra-01  w-96" src="@/images/raft-me-libra.svg"/>
                    <img alt="logo" class="absolute raft-llambe top-80 right-80  w-96 h-80" src="../images/raft-me-llambe.svg"/>
                    <img alt="logo" class="absolute vazo-lule w-80 h-48" src="@/images/vazo-luleje.svg"/>
                    <img alt="logo" class="absolute raft-lule" src="../images/raft-me-lule.svg"/>
                    <img alt="logo" class="absolute raft-libra-02 w-96 h-80" src="@/images/raft-me-libra.svg"/>
                    <img alt="logo" class="absolute raft-libra-03 top-80 -right-0 w-96 h-80" src="@/images/raft-me-libra.svg"/>
                </div>
            </div>
            <div class="relative z-50 flex flex-row items-center justify-center space-x-32 py-2.5 bg-dark-ecstasy">
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
    top: 15rem;
    left: 56rem;
}
.raft-llambe {
    top: 16rem;
    left: 10rem;
}
.vazo-lule {
    top: 16.4rem;
    left: 23rem;
}
.raft-lule {
    top: 2rem;
    left: 58.2rem;
    height: 60rem;
    weight: 60rem;
}
.raft-libra-03 {
    top: 15.6rem;
    left: 35rem;
}
</style>
