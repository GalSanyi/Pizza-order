import Link from "next/link";

export default function Header() {
    return (
        <header className='flex items-center justify-between'>
            <Link className='text-red-500 font-semibold text-2xl' href=''>SANYI Pizza</Link>
            <nav className='flex gap-4 text-gray-500 font-semibold'>
                <Link href={''}>Home</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Contact</Link>

            </nav>
            <Link className='bg-primary text-white px-8 py-2 rounded-full' href={''}>Login</Link>
        </header>
    )
}