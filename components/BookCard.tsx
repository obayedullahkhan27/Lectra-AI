import Link from "next/link";
import {BookCardProps} from "@/types";
import Image from "next/image";

const BookCard = ({ title, author, coverURL, slug }: BookCardProps) => {
    return (
        <Link href={`/books/${slug}`}>
        <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20">
          <figure className="flex flex-col gap-5 p-5">
            
            {/* Book Cover */}
            <div className="relative mx-auto w-full max-w-45">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-white/10 to-transparent blur-xl opacity-60" />
      
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
                <Image
                  src={coverURL}
                  alt={title}
                  width={180}
                  height={260}
                  className="h-65 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
      
            {/* Content */}
            <figcaption className="space-y-2 text-center">
              <h3 className="line-clamp-2 text-lg font-semibold text-white">
                {title}
              </h3>
      
              <p className="text-sm font-medium text-white/70">
                by {author}
              </p>
      
              <div className="pt-2">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-white/70">
                  Read Now
                </span>
              </div>
            </figcaption>
          </figure>
        </article>
      </Link>
    )
}
export default BookCard
