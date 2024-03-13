<script setup>
</script>

<template>
    <main>
        <div class="">
            <div class="relative mt-8 w-4/5 lg:w-3/5  m-auto">
                <img alt="logo" class="absolute z-50 h-32 left-12 -top-1.5" src="@/images/mace.svg"/>
                <input type="text" name="name" id="name"
                       class="absolute top-6 block w-full bg-cinnamonMilkDark rounded-full px-12 py-4 text-gray-900 focus:ring-2 focus:ring-offset focus:ring-dark-tile sm:text-sm sm:leading-6">
                <i class="absolute right-6 top-8 text-4xl text-tile fa-solid fa-magnifying-glass"></i>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-40 mx-12">
                <div class="flex flex-row justify-between space-x-8 bg-cinnamonMilkDark">
                    <div class="flex flex-col space-y-8 self-center w-1/2 px-8 py-20">
                        <div class="text-xl md:text-6xl text-tile font-glorify">
                            Albanian titles
                        </div>
                        <button type="button"
                                class="rounded-lg bg-cinnamonMilkDark px-2 py-1 md:text-2xl text-tile font-glorify shadow-sm ring-2 ring-inset ring-tile hover:bg-cinnamonMilk">
                            Click here
                        </button>
                    </div>
                    <img alt="logo" class=" w-1/2" src="@/images/photo01.jpeg"/>
                </div>

                <div class="flex flex-row justify-between space-x-8 bg-cinnamonMilkDark">
                    <div class="flex flex-col space-y-8 self-center w-1/2 px-8 py-20">
                        <div class="text-xl md:text-6xl text-tile font-glorify">
                            Foreign titles
                        </div>
                        <button type="button"
                                class=" rounded-lg bg-cinnamonMilkDark px-2 py-1 md:text-2xl text-tile font-glorify shadow-sm ring-2 ring-inset ring-tile hover:bg-cinnamonMilk">
                            Click here
                        </button>
                    </div>
                    <img alt="logo" class=" w-1/2" src="@/images/photo02.jpeg"/>
                </div>
            </div>

            <div id="books" class="mt-12 bg-cinnamonMilky px-12">
                <div class="py-12">
                    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between opacity-90">
                        <button type="button"
                                class="inline-flex justify-center gap-x-1.5 rounded-md bg-cinnamonMilkDark px-6 py-2 font-glorify text-3xl text-tile tracking-widest hover:shadow-sm"
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                        >
                            Category:
                            <div class="-mr-1 text-3xl text-ecstasy">
                                Classics
                            </div>
                        </button>
                        <button type="button"
                                class="inline-flex justify-center gap-x-1.5 rounded-md bg-cinnamonMilkDark px-6 py-2 font-glorify text-3xl text-tile tracking-widest hover:shadow-sm"
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                        >
                            Filter:
                            <div class="-mr-1 text-3xl text-ecstasy">
                                Sort by ...
                            </div>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 pb-8">
                    <div class="">
                        <img alt="logo" class="w-80" src="@/images/photo03.jpeg"/>
                        <div class="pt-4 tracking-widest font-semibold text-base text-center">To kill a
                            mockingbird
                        </div>
                        <div class="font-light tracking-widest text-center text-sm">Harper Lee</div>
                    </div>
                    <div class="">
                        <img alt="logo" class="w-80" src="@/images/photo04.jpeg"/>
                        <div class="pt-4 tracking-widest font-semibold text-base text-center">Pride and
                            Prejudice
                        </div>
                        <div class="font-light tracking-widest text-center text-sm">Jane Austen</div>
                    </div>
                    <div class="">
                        <img alt="logo" class="w-80" src="@/images/photo05.jpeg"/>
                        <div class="pt-4 tracking-widest font-semibold text-base text-center">Crime and
                            Punishment
                        </div>
                        <div class="font-light tracking-widest text-center text-sm">Fyodor Dostoyevsky</div>
                    </div>
                    <div class="">
                        <img alt="logo" class="w-80" src="@/images/photo06.jpeg"/>
                        <div class="pt-4 tracking-widest font-semibold text-base text-center">1984</div>
                        <div class="font-light tracking-widest text-center text-sm">George Orwell</div>
                    </div>
                    <div class="">
                        <img alt="logo" class="w-80" src="@/images/photo07.jpeg"/>
                        <div class="pt-4 tracking-widest font-semibold text-base text-center">Great
                            Expectations
                        </div>
                        <div class="font-light tracking-widest text-center text-sm">Charles Dickens</div>
                    </div>
                </div>
            </div>

            <div class="mt-12 bg-cinnamonMilky px-12">
                <div class="py-12 text-center text-5xl font-semibold font-vonique">New Arrivals</div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8">
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo08.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">BOX SET</div>
                        <div class="font-light tracking-widest text-center">Diary of a Wimpy Kid Box of Books</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo09.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">BOOK BUNDLE</div>
                        <div class="font-light tracking-widest text-center">Vintage Quarterbound Classics Collection I
                        </div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo10.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">BOOK BUNDLE</div>
                        <div class="font-light tracking-widest text-center">Murakami Collectible Classics II</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo11.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">BOOK BUNDLE</div>
                        <div class="font-light tracking-widest text-center">Page Turners Fantasy Romance Bundle</div>
                    </div>
                </div>
            </div>

            <div class="mt-12 bg-cinnamonMilky px-12">
                <div class="py-12 text-center text-5xl font-semibold font-vonique">Bestsellers</div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8">
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo12.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">The Heaven & Earth Grocery Store</div>
                        <div class="font-light tracking-widest text-center">James McBride, Dominic Hoffman, et al.</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo13.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">The Covenant of Water</div>
                        <div class="font-light tracking-widest text-center">Abraham Verghese</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo14.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Lessons in Chemistry</div>
                        <div class="font-light tracking-widest text-center">Bonnie Garmus</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo15.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">The Lost Bookshop</div>
                        <div class="font-light tracking-widest text-center">Evie Woods</div>
                    </div>
                </div>
            </div>

            <div id="events" class="mt-12 bg-cinnamonMilky px-12">
                <div class="py-12 text-center text-5xl font-semibold font-vonique">Events</div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8">
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo16.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Blind Date</div>
                        <div class="font-light tracking-widest text-center">Valentine’s day</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo17.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Bring your pet</div>
                        <div class="font-light tracking-widest text-center">Pet International Day should be everyday</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo18.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Read and Sip</div>
                        <div class="font-light tracking-widest text-center">You choose the book, we choose the coffee</div>
                    </div>
                    <div class="">
                        <div class="ring-2 ring-offset-4 ring-white">
                            <img alt="logo" class="w-80 h-80" src="@/images/photo19.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Future Events</div>
                        <div class="font-light tracking-widest text-center">Stay tuned!</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
