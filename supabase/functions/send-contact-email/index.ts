import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, company, phone, email, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact form email from:", email);

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "CargoSeller <onboarding@resend.dev>",
        to: ["kontakt@cargoseller.pl"],
        reply_to: email,
        subject: `Nowa wiadomość z formularza kontaktowego od ${name}`,
        html: `
          <h2>Nowa wiadomość z formularza kontaktowego</h2>
          <p><strong>Imię i nazwisko:</strong> ${name}</p>
          <p><strong>Firma:</strong> ${company}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Wiadomość:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const data = await emailResponse.json();

    if (!emailResponse.ok) {
      throw new Error(data.message || "Failed to send email");
    }

    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
