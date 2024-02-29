<script setup>
</script>

<template>
    <main>
        <div class="">
            <div class="relative mt-8 w-3/5 m-auto">
                <img alt="logo" class="absolute z-50 h-32 left-12 -top-1.5" src="@/images/mace.svg"/>
                <input type="text" name="name" id="name"
                       class="absolute top-6 block w-full bg-cinnamonMilkDark rounded-full px-12 py-4 text-gray-900 focus:ring-2 focus:ring-offset focus:ring-dark-tile sm:text-sm sm:leading-6">
                <i class="absolute right-6 top-8 text-4xl text-tile fa-solid fa-magnifying-glass"></i>
            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-44 mx-12 ">
                <div class="flex flex-row justify-between bg-cinnamonMilkDark">
                    <div class="flex flex-col space-y-4 self-center items-center w-1/2 px-4">
                        <div class="text-xl md:text-5xl text-tile">
                            Albanian titles
                        </div>
                        <button type="button"
                                class="md:w-1/3 rounded-lg bg-cinnamonMilkDark px-1 py-1 md:text-lg text-tile shadow-sm ring-2 ring-inset ring-tile hover:bg-cinnamonMilk">
                            Click here
                        </button>

                    </div>
                    <img alt="logo" class=" w-1/2" src="@/images/photo01.jpeg"/>
                </div>

                <div class="flex flex-row justify-between bg-cinnamonMilkDark">
                    <div class="flex flex-col space-y-4 self-center items-center w-1/2 px-4">
                        <div class="text-xl md:text-5xl text-tile">
                            Foreign titles
                        </div>
                        <button type="button"
                                class="md:w-1/3 rounded-lg bg-cinnamonMilkDark px-1 py-1 md:text-lg text-tile shadow-sm ring-2 ring-inset ring-tile hover:bg-cinnamonMilk">
                            Click here
                        </button>

                    </div>
                    <img alt="logo" class=" w-1/2" src="@/images/photo02.jpeg"/>
                </div>
            </div>

            <div class="mt-12 bg-cinnamonMilk px-12">
                <div class="py-12">
                    <div class="flex flex-col md:flex-row justify-between">
                        <button type="button"
                                class="inline-flex justify-center gap-x-1.5 rounded-md bg-cinnamonMilkDark px-6 py-2 text-2xl text-tile tracking-widest hover:shadow-sm"
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                        >
                            Category:
                            <span class="-mr-1 text-xl text-ecstasy">
                                Classics
                            </span>
                        </button>
                        <button type="button"
                                class="inline-flex justify-center gap-x-1.5 rounded-md bg-cinnamonMilkDark px-6 py-2 text-2xl text-tile tracking-widest hover:shadow-sm"
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                        >
                            Filter:
                            <span class="-mr-1 text-xl text-ecstasy">
                                Sort by ...
                            </span>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-5 gap-12 pb-8">
                    <div class="">
                        <img alt="logo" class="w-80 h-96" src="@/images/photo03.jpeg"/>
                        <div class="pt-4 tracking-wider font-semibold text-base text-center uppercase">To kill a
                            mockingbird
                        </div>
                        <div class="font-light tracking-wider text-center">Harper Lee</div>
                    </div>
                    <div class="">
                        <img alt="logo" class="w-80 h-96" src="@/images/photo04.jpeg"/>
                        <div class="pt-4 tracking-wider font-semibold text-base text-center uppercase">Pride and
                            Prejudice
                        </div>
                        <div class="font-light tracking-wider text-center">Jane Austen</div>
                    </div>
                    <div class="">
                        <img alt="logo" class="w-80 h-96" src="@/images/photo05.jpeg"/>
                        <div class="pt-4 tracking-wider font-semibold text-base text-center uppercase">Crime and
                            Punishment
                        </div>
                        <div class="font-light tracking-wider text-center">Fyodor Dostoyevsky</div>
                    </div>
                    <div class="">
                        <img alt="logo" class="w-80 h-96" src="@/images/photo06.jpeg"/>
                        <div class="pt-4 tracking-wider font-semibold text-base text-center uppercase">1984</div>
                        <div class="font-light tracking-wider text-center">George Orwell</div>
                    </div>
                    <div class="">
                        <img alt="logo" class="w-80 h-96" src="@/images/photo07.jpeg"/>
                        <div class="pt-4 tracking-wider font-semibold text-base text-center uppercase">Great
                            Expectations
                        </div>
                        <div class="font-light tracking-wider text-center">Charles Dickens</div>
                    </div>
                </div>
            </div>

            <div class="mt-12 bg-cinnamonMilk px-12">
                <div class="py-12 text-center text-5xl font-semibold font-serif">New Arrivals</div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-8">
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo08.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">BOX SET</div>
                        <div class="font-light tracking-wider text-center">Diary of a Wimpy Kid Box of Books</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo09.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">BOOK BUNDLE</div>
                        <div class="font-light tracking-wider text-center">Vintage Quarterbound Classics Collection I
                        </div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo10.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">BOOK BUNDLE</div>
                        <div class="font-light tracking-wider text-center">Murakami Collectible Classics II</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo11.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">BOOK BUNDLE</div>
                        <div class="font-light tracking-wider text-center">Page Turners Fantasy Romance Bundle</div>
                    </div>
                </div>
            </div>

            <div class="mt-12 bg-cinnamonMilk px-12">
                <div class="py-12 text-center text-5xl font-semibold font-serif">Bestsellers</div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-8">
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo12.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">The Heaven & Earth Grocery Store</div>
                        <div class="font-light tracking-wider text-center">James McBride, Dominic Hoffman, et al.</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo13.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">The Covenant of Water</div>
                        <div class="font-light tracking-wider text-center">Abraham Verghese</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo14.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Lessons in Chemistry</div>
                        <div class="font-light tracking-wider text-center">Bonnie Garmus</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo15.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">The Lost Bookshop</div>
                        <div class="font-light tracking-wider text-center">Evie Woods</div>
                    </div>
                </div>
            </div>

            <div class="mt-12 bg-cinnamonMilk px-12">
                <div class="py-12 text-center text-5xl font-semibold font-serif">Events</div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-8">
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo16.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Blind Date</div>
                        <div class="font-light tracking-wider text-center">Valentine’s day</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo17.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Bring your pet</div>
                        <div class="font-light tracking-wider text-center">Pet International Day should be everyday</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo18.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Read and Sip</div>
                        <div class="font-light tracking-wider text-center">You choose the book, we choose the coffee</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo19.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Future Events</div>
                        <div class="font-light tracking-wider text-center">Stay tuned!</div>
                    </div>
                </div>
            </div>

            <div class="mt-12 bg-tile px-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-8">
                    <div class="flex flex-col space-y-2 text-white">
                        <div class=" pt-4 tracking-wider font-semibold text-base">SHOPPING WITH US</div>
                        <div class="font-light tracking-wider">Client’s Card</div>
                        <div class="font-light tracking-wider">Gift Card</div>
                        <div class="font-light tracking-wider">CupBook Plus</div>
                        <div class="font-light tracking-wider">Special Orders</div>
                    </div>
                    <div class="flex flex-col space-y-2 text-white">
                        <div class=" pt-4 tracking-wider font-semibold text-base">COSTUMER SERVICES</div>
                        <div class="font-light tracking-wider">Help</div>
                        <div class="font-light tracking-wider">Delivery</div>
                        <div class="font-light tracking-wider">Payment Methods</div>
                        <div class="font-light tracking-wider">Privacy Policy</div>
                        <div class="font-light tracking-wider">Legal Notice</div>
                    </div>
                    <div class="flex flex-col space-y-2 text-white">
                        <div class=" pt-4 tracking-wider font-semibold text-base">CONTACT US</div>
                        <div class="font-light tracking-wider">CupBook</div>
                        <div class="font-light tracking-wider">Adress: "Reshit Collaku" street, Tirana, Albania</div>
                        <div class="font-light tracking-wider">+000 - 2428 -158</div>
                        <div class="font-light tracking-wider">cupbook@gmail.com</div>
                        <div class="font-light tracking-wider">www.cupbookshop.com</div>
                    </div>
                    <div class="flex flex-col space-y-2 text-white">
                        <div class=" pt-4 tracking-wider font-semibold text-base">FOLLOW US</div>
                        <div class="font-light tracking-wider">Facebook</div>
                        <div class="font-light tracking-wider">Instagram</div>
                    </div>
                </div>
            </div>

            <div class="bg-dark-tile text-cinnamonMilkDark text-center text-xs py-6">
                <div>Copyright 2004 -2024 | All rights reserved.</div>
                <div>This website or any portion thereof may not be reproduced or used in any manner whatsoever without the permission of the owner.</div>
                <div>Terms & Conditions | Privacy | Legal Notice</div>
            </div>
        </div>
    </main>
</template>
