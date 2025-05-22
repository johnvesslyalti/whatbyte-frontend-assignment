import { Search, ShoppingCart } from 'lucide-react';

export default function Navbar() {
    return(
        <nav className='flex justify-between items-center px-10 py-5 bg-blue-800'>
            <div className='text-2xl font-bold text-white'>What Bytes</div>
            <div className='flex border-white/30 w-1/3 p-3 border gap-5 rounded-lg'>
                <Search className='text-white'/>
                <input 
                type="text"
                placeholder="Search for products..."
                className='text-white placeholder-white focus:outline-none'
                />
            </div>
            <div className='flex bg-blue-950 px-10 py-3 cursor-pointer gap-3 rounded-lg'>
                <ShoppingCart className='text-white'/>
                <div className='text-white font-bold'>Cart</div>
            </div>
        </nav>
    )
}