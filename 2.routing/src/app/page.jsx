import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1> home page </h1>
            <Link href='/products'> Products </Link>
        </div>

    )
}