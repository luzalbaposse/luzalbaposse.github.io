import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    console.log("🔹 API /api/newsletter was called!");

    try {
        const { email } = await req.json();
        console.log("🔹 Received email:", email);

        if (!email) {
            console.error("❌ No email provided");
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        console.log("🔹 Sending request to Resend...");

        const response = await resend.contacts.create({
            email,
            audienceId: process.env.RESEND_AUDIENCE_ID!,
            unsubscribed: false, // Ensure user is subscribed
        });

        console.log("✅ Resend response:", response);

        return NextResponse.json({ message: "Successfully subscribed!", data: response });
    } catch (error: any) {
        console.error("❌ Resend API Error:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
