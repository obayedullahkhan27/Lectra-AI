import React from 'react'
import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import {getAllBooks} from "@/lib/actions/book.actions";
import Search from "@/components/Search";

const Page = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
    const { query } = await searchParams;

    const bookResults = await getAllBooks(query)
    const books = bookResults.success ? bookResults.data ?? [] : []

    return (
        <main className="wrapper container">
            
            <HeroSection />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
                <h2 className="text-3xl font-serif font-bold text-[#212a3b]">Our Recent Book</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, natus. Aliquid corrupti labore vero ullam perferendis corporis fugiat explicabo expedita amet ex laudantium inventore saepe ad asperiores minus, quo ipsam!</p>
                <Search />
            </div>

            <div className="library-books-grid">
                {books.map((book) => (
                    <BookCard key={book._id} title={book.title} author={book.author} coverURL={book.coverURL} slug={book.slug} />
                ))}
            </div>
        </main>
    )
}

export default Page
