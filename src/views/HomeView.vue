<script setup>
import {computed, ref} from "vue";
import photo03 from '@/images/photo03.jpeg';
import photo04 from '@/images/photo04.jpeg';
import photo05 from '@/images/photo05.jpeg';
import photo06 from '@/images/photo06.jpeg';
import photo07 from '@/images/photo07.jpeg';
import photo12 from '@/images/photo12.jpeg';
import photo13 from '@/images/photo13.jpeg';
import photo14 from '@/images/photo14.jpeg';
import photo15 from '@/images/photo15.jpeg';

const searchQuery = ref('');
const books = [
    {
        title: 'To kill a mockingbird',
        cover: photo03,
        author: 'Harper Lee',
        isBestseller: true,
    },
    {
        title: 'Pride and Prejudice',
        cover: photo04,
        author: 'Jane Austen',
        isBestseller: true,
    },
    {
        title: 'Crime and Punishment',
        cover: photo05,
        author: 'Fyodor Dostoyevsky',
        isBestseller: true,
    },
    {
        title: '1984',
        cover: photo06,
        author: 'George Orwell',
        isBestseller: true,
    },
    {
        title: 'Great Expectations',
        cover: photo07,
        author: 'Charles Dickens',
        isBestseller: true,
    },
    {
        title: 'The Heaven & Earth Grocery Store',
        cover: photo12,
        author: 'James McBride, Dominic Hoffman, et al.',
        isBestseller: true,
    },
    {
        title: 'The Covenant of Water',
        cover: photo13,
        author: 'Abraham Verghese',
        isBestseller: true,
    },
    {
        title: 'Lessons in Chemistry',
        cover: photo14,
        author: 'Bonnie Garmus',
        isBestseller: true,
    },
    {
        title: 'The Lost Bookshop',
        cover: photo15,
        author: 'Evie Woods',
        isBestseller: true,
    }
]

const filteredBooks = computed(() => {
    if (! searchQuery.value) return [];

    return books.filter(function (book) {
        return book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.value.toLowerCase())
    })
})

</script>

<template>
    <main>
        <div class="">
            <div class="relative mt-16 w-4/5 lg:w-3/5  m-auto">
                <img alt="logo" class="absolute z-50 h-32 left-12 -top-[30px]" src="@/images/mace.svg"/>
                <input v-model="searchQuery"
                       type="text"
                       name="name"
                       id="name"
                       class="block w-full bg-cinnamonMilkDark rounded-full px-12 py-4 text-gray-900 focus:ring-2 focus:ring-offset focus:ring-dark-tile sm:text-sm sm:leading-6">
                <button class="absolute right-6 top-2 text-4xl text-tile fa-solid fa-magnifying-glass"></button>
            </div>

            <div v-if="filteredBooks.length"
                 id="books"
                 class="bg-cinnamonMilky px-12 mt-16 py-8"
            >
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
                    <div v-for="book in filteredBooks">
                        <img alt="logo" class="w-80" :src="book.cover"/>
                        <div class="pt-4 tracking-widest font-semibold text-base text-center">
                            {{ book.title }}
                        </div>
                        <div class="font-light tracking-widest text-center text-sm">{{ book.author }}</div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20 mx-6 md:mx-12">
                <div class="flex flex-row justify-between md:space-x-8 bg-cinnamonMilkDark">
                    <div class="flex flex-col space-y-8 self-center w-1/2 px-8 py-6 lg:py-20">
                        <div class="text-3xl md:text-4xl xl:text-6xl text-tile font-glorify">
                            Albanian titles
                        </div>
                        <button type="button"
                                class="w-min whitespace-nowrap rounded-lg px-2 py-1 text-md md:text-xl lg:text-2xl text-tile font-glorify border border-tile shadow-inner shadow-neutral-400 hover:shadow-xl">
                            Click here
                        </button>
                    </div>
                    <img alt="logo" class="object-cover w-1/2" src="@/images/photo01.jpeg"/>
                </div>

                <div class="flex flex-row justify-between md:space-x-8 bg-cinnamonMilkDark">
                    <div class="flex flex-col space-y-8 self-center w-1/2 px-8 py-6 lg:py-20">
                        <div class="text-3xl md:text-4xl xl:text-6xl text-tile font-glorify">
                            Foreign titles
                        </div>
                        <button type="button"
                                class="w-min whitespace-nowrap rounded-lg px-2 py-1 text-md md:text-xl lg:text-2xl text-tile font-glorify border border-tile shadow-inner shadow-neutral-400 hover:shadow-xl">
                            Click here
                        </button>
                    </div>
                    <img alt="logo" class="object-cover w-1/2" src="@/images/photo02.jpeg"/>
                </div>
            </div>

            <div id="books" class="mt-12 bg-cinnamonMilky px-12">
                <div class="py-12">
                    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between opacity-90">
                        <div
                            class="inline-flex justify-center gap-x-1.5 rounded-md bg-cinnamonMilkDark px-6 py-2 hover:shadow-sm">
                            <label for="category" class="block font-glorify text-2xl text-tile tracking-widest ">Category:</label>
                            <div class="-mr-1 text-2xl text-ecstasy font-glorify">
                                <select id="category"
                                        name="category"
                                        class="text-2xl text-ecstasy font-glorify bg-transparent"
                                >
                                    <option>Classics</option>
                                    <option selected>Romance</option>
                                    <option>Thriller</option>
                                </select>
                            </div>
                        </div>
                        <div
                            class="inline-flex justify-center gap-x-1.5 rounded-md bg-cinnamonMilkDark px-6 py-2 hover:shadow-sm">
                            <label for="category" class="block font-glorify text-2xl text-tile tracking-widest ">Filter
                                by:</label>
                            <div class="-mr-1 text-2xl text-ecstasy font-glorify">
                                <select id="category"
                                        name="category"
                                        class="text-2xl text-ecstasy font-glorify bg-transparent"
                                >
                                    <option>Author</option>
                                    <option selected>Title</option>
                                </select>
                            </div>
                        </div>
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
                        <div class="relative">
                            <span class="absolute -right-1.5 top-3 px-1 text-sm font-vonique text-white bg-emerald-600">New</span>
                            <img alt="logo" class="object-cover ring-2 ring-offset-4 ring-white w-80 h-80"
                                 src="@/images/photo08.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">BOX SET</div>
                        <div class="font-light tracking-widest text-center">Diary of a Wimpy Kid Box of Books</div>
                    </div>
                    <div class="">
                        <div class="relative">
                            <span class="absolute -right-1.5 top-3 px-1 text-sm font-vonique text-white bg-emerald-600">New</span>
                            <img alt="logo" class="object-cover ring-2 ring-offset-4 ring-white w-80 h-80"
                                 src="@/images/photo09.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">BOOK BUNDLE</div>
                        <div class="font-light tracking-widest text-center">Vintage Quarterbound Classics Collection I
                        </div>
                    </div>
                    <div class="">
                        <div class="relative">
                            <span class="absolute -right-1.5 top-3 px-1 text-sm font-vonique text-white bg-emerald-600">New</span>
                            <img alt="logo" class="object-cover ring-2 ring-offset-4 ring-white w-80 h-80"
                                 src="@/images/photo10.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">BOOK BUNDLE</div>
                        <div class="font-light tracking-widest text-center">Murakami Collectible Classics II</div>
                    </div>
                    <div class="">
                        <div class="relative">
                            <span class="absolute -right-1.5 top-3 px-1 text-sm font-vonique text-white bg-emerald-600">New</span>
                            <img alt="logo" class="object-cover ring-2 ring-offset-4 ring-white w-80 h-80"
                                 src="@/images/photo11.jpeg"/>
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
                        <div class="relative">
                            <img alt="logo" class="object-cover ring-2 ring-offset-4 ring-white w-80 h-80"
                                 src="@/images/photo12.jpeg"/>
                            <span
                                class="absolute -right-1.5 top-3 px-2 text-sm font-light font-glorify text-white uppercase bg-amber-500">Best <br> Seller</span>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">The Heaven & Earth Grocery
                            Store
                        </div>
                        <div class="font-light tracking-widest text-center">James McBride, Dominic Hoffman, et al.</div>
                    </div>
                    <div class="">
                        <div class="relative">
                            <span
                                class="absolute -right-1.5 top-3 px-2 text-sm font-light font-glorify text-white uppercase bg-amber-500">Best <br> Seller</span>
                            <img alt="logo" class="object-cover ring-2 ring-offset-4 ring-white w-80 h-80"
                                 src="@/images/photo13.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">The Covenant of Water
                        </div>
                        <div class="font-light tracking-widest text-center">Abraham Verghese</div>
                    </div>
                    <div class="">
                        <div class="relative">
                            <span
                                class="absolute -right-1.5 top-3 px-2 text-sm font-light font-glorify text-white uppercase bg-amber-500">Best <br> Seller</span>
                            <img alt="logo" class="object-cover ring-2 ring-offset-4 ring-white w-80 h-80"
                                 src="@/images/photo14.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Lessons in Chemistry</div>
                        <div class="font-light tracking-widest text-center">Bonnie Garmus</div>
                    </div>
                    <div class="">
                        <div class="relative">
                            <span
                                class="absolute -right-1.5 top-3 px-2 text-sm font-light font-glorify text-white uppercase bg-amber-500">Best <br> Seller</span>
                            <img alt="logo" class="object-cover ring-2 ring-offset-4 ring-white w-80 h-80"
                                 src="@/images/photo15.jpeg"/>
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
                        <div class="">
                            <img alt="logo" class="object-cover w-80 h-80 ring-2 ring-offset-4 ring-white"
                                 src="@/images/photo16.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Blind Date</div>
                        <div class="font-light tracking-widest text-center">Valentine’s day</div>
                    </div>
                    <div class="">
                        <div class="">
                            <img alt="logo" class="object-cover w-80 h-80 ring-2 ring-offset-4 ring-white"
                                 src="@/images/photo17.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Bring your pet</div>
                        <div class="font-light tracking-widest text-center">Pet International Day should be everyday
                        </div>
                    </div>
                    <div class="">
                        <div class="">
                            <img alt="logo" class="object-cover w-80 h-80 ring-2 ring-offset-4 ring-white"
                                 src="@/images/photo18.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Read and Sip</div>
                        <div class="font-light tracking-widest text-center">You choose the book, we choose the coffee
                        </div>
                    </div>
                    <div class="">
                        <div class="">
                            <img alt="logo" class="object-cover w-80 h-80 ring-2 ring-offset-4 ring-white"
                                 src="@/images/photo19.jpeg"/>
                        </div>
                        <div class=" pt-4 tracking-wider font-semibold text-base text-center">Future Events</div>
                        <div class="font-light tracking-widest text-center">Stay tuned!</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
