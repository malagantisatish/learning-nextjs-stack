import Link from "next/link"
const Header = () => {
    return (
        <div className='flex items-center gap-x-4 gap-y-2 py-2 h-10 w-full'>
            <Link href="/sunday" className="text-white">
                <div>sunday</div>
            </Link>
            <Link href="/monday" className="text-white">
                <div>monday</div>
            </Link>
            <Link href="/college/mpc" className="text-white">
                <div>mpc</div>
            </Link>
            <Link href="/college/bipc" className="text-white">
                <div>bipc</div>
            </Link>
        </div>
    )
}

export default Header