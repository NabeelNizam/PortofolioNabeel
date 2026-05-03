import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "abee237@gmail.com",
            subject: "New Contact Message",
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
}