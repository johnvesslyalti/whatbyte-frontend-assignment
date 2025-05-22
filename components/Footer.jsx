import { Facebook, FacebookIcon, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return(
        <div className="flex justify-evenly py-5 bg-blue-900  w-full text-white">
            <div className="flex flex-col gap-5">
                <div className="text-2xl font-bold">Filters</div>
                <div className="flex gap-5">
                    <div>All</div>
                    <div>Elcrozank</div>
                </div>
                <div>© 2024 American</div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="text-xl font-bold">About Us</div>
                <div className="flex flex-col gap-2">
                    <div>About Us</div>
                    <div>Contact</div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="text-xl font-bold">Follow Us</div>
                <div className="flex gap-5">
                    <div className="p-2 bg-blue-600 rounded-full"><Facebook /></div>
                    <div className="p-2 bg-blue-600 rounded-full"><Twitter /></div>
                    <div className="p-2 bg-blue-600 rounded-full"><Instagram /></div>
                </div>
            </div>
        </div>
    )
}