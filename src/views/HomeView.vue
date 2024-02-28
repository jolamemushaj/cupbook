<script setup>
</script>

<template>
    <main>
        <div class="mb-40">

            <div class="relative mt-8 w-3/5 m-auto">
                <img alt="logo" class="absolute z-50 h-32 left-12 -top-1.5" src="@/images/mace.svg"/>
                <input type="text" name="name" id="name"
                       class="absolute top-6 block w-full bg-cinnamonMilkDark rounded-full px-12 py-4 text-gray-900 focus:ring-2 focus:ring-offset focus:ring-dark-tile sm:text-sm sm:leading-6">
                <i class="absolute right-6 top-8 text-4xl text-tile fa-solid fa-magnifying-glass"></i>
            </div>


            <div class="grid grid-cols-2 gap-12 pt-44 mx-12 ">
                <div class="flex flex-row justify-between bg-cinnamonMilkDark">
                    <div class="flex flex-col space-y-4 self-center items-center w-1/2 px-4">
                        <div class="text-5xl text-tile">
                            Albanian titles
                        </div>
                        <button type="button"
                                class="w-1/3 rounded-lg bg-cinnamonMilkDark px-1 py-1 text-lg text-tile shadow-sm ring-2 ring-inset ring-tile hover:bg-cinnamonMilk">
                            Click here
                        </button>

                    </div>
                    <img alt="logo" class=" w-1/2" src="@/images/photo01.jpeg" width="125" height="125"/>
                </div>

                <div class="flex flex-row justify-between bg-cinnamonMilkDark">
                    <div class="flex flex-col space-y-4 self-center items-center w-1/2 px-4">
                        <div class="text-5xl text-tile">
                            Foreign titles
                        </div>
                        <button type="button"
                                class="w-1/3 rounded-lg bg-cinnamonMilkDark px-1 py-1 text-lg text-tile shadow-sm ring-2 ring-inset ring-tile hover:bg-cinnamonMilk">
                            Click here
                        </button>

                    </div>
                    <img alt="logo" class=" w-1/2" src="@/images/photo02.jpeg" width="125" height="125"/>
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

                <div class="grid grid-cols-5 gap-12 pb-8">
                    <div class="">
                        <img alt="logo" class="w-80 h-96" src="@/images/photo03.jpeg" width="125" height="125"/>
                        <div class="font-semibold text-lg text-center">To kill a mockingbird</div>
                        <div class="font-light tracking-wider text-center">Harper Lee</div>
                    </div>
                    <div class="">
                        <img alt="logo" class="w-80 h-96" src="@/images/photo04.jpeg" width="125" height="125"/>
                        <div class="font-semibold text-lg text-center">Pride and Prejudice</div>
                        <div class="font-light tracking-wider text-center">Jane Austen</div>
                    </div>
                    <div class="">
                        <img alt="logo" class="w-80 h-96" src="@/images/photo05.jpeg" width="125" height="125"/>
                        <div class="font-semibold text-lg text-center">Crime and Punishment</div>
                        <div class="font-light tracking-wider text-center">Fyodor Dostoyevsky</div>
                    </div>
                    <div class="">
                        <img alt="logo" class="w-80 h-96" src="@/images/photo06.jpeg" width="125" height="125"/>
                        <div class="font-semibold text-lg text-center">1984</div>
                        <div class="font-light tracking-wider text-center">George Orwell</div>
                    </div>
                    <div class="">
                        <img alt="logo" class="w-80 h-96" src="@/images/photo07.jpeg" width="125" height="125"/>
                        <div class="font-semibold text-lg text-center">Great Expectations</div>
                        <div class="font-light tracking-wider text-center">Charles Dickens</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
