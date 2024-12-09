import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();

    if (!email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
        }
      );
    }

    const response = await resend.emails.send({
      from: "MUTABAZI <onboarding@resend.dev>",
      to: ["mudonne18@gmail.com", email],
      subject: subject,
      react: EmailTemplate({ message, email }),
    });

    if (response.error) {
      console.error("Resend API Error:", response.error);
      return new Response(JSON.stringify({ error: response.error }), {
        status: 500,
      });
    }

    return new Response(
      JSON.stringify({ status: "success", data: response.data }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Server Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
