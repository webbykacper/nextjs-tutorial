"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import '../_styles/style.css'
import { useState } from "react";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
]

export default function AuthFunction({ children }) {
    const pathname = usePathname();
    const [input, setInput] = useState("");

    return (
        <div>
            <div>
                <input value={input} onChange={e => setInput(e.target.value)} />
            </div>
        { navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
                <Link href = {link.href} key={link.name} className={isActive ? "active" : null}> {link.name} </Link>
            )
        })}
        {children}
        </div>
    )
}