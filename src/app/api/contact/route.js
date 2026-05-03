import { Resend } from "resend";

export async function POST(req) {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            return Response.json(
                { error: "RESEND_API_KEY is not configured" },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);

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
            { error: error instanceof Error ? error.message : "Something went wrong" },
            { status: 500 }
        );
    }
}