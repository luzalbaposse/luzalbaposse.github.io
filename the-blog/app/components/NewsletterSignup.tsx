"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Oi, Open_Sans } from "next/font/google"

const oi = Oi({
    weight: "400",
    subsets: ["latin"],
  })
  
  const openSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
  })
  
export default function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Thank you for subscribing!");
                setEmail(""); // Clear input field
            } else {
                setMessage(data.error || "Something went wrong.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className="bg-[#734F4F] p-8 md:p-16 rounded-t-lg">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className={`text-white text-4xl md:text-6xl font-bold mb-8 leading-tight ${oi.className}`}>
                    THE BLOG ON YOUR EMAIL
                </h2>
                <form onSubmit={handleSubmit} className="flex gap-4 max-w-xl mx-auto">
                    <Input
                        type="email"
                        placeholder="Email"
                        className="bg-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="secondary" className={`${openSans.className}`}>
                        SIGN UP
                    </Button>
                </form>
                {message && <p className={`text-white mt-4 ${openSans.className}`}>{message}</p>}
            </div>
        </div>
    );
}
