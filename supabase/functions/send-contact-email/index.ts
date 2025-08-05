import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  service?: string;
  message: string;
  phone?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, service, message, phone }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { name, email, service, message, phone });

    // Create email body with all form details
    let emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Message from Website
          </h2>
          
          <p style="color: #555; font-size: 16px; margin-bottom: 25px;">
            You have received a new message from your website contact form:
          </p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151; width: 120px;">
                  Name:
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #555;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">
                  Email:
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #555;">
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                </td>
              </tr>`;

    if (phone) {
      emailBody += `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">
                  Phone:
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #555;">
                  <a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a>
                </td>
              </tr>`;
    }

    if (service) {
      emailBody += `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">
                  Service:
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #555;">
                  ${service}
                </td>
              </tr>`;
    }

    emailBody += `
            </table>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px; font-size: 16px;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 4px; white-space: pre-wrap; color: #555; line-height: 1.5;">
${message}
            </div>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #9ca3af; font-size: 14px; margin: 0;">
              This email was sent from your aitamate.com contact form
            </p>
          </div>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Contact Form <noreply@aitamate.com>",
      to: ["rj@aitamate.com"],
      subject: "New Contact Message from Website",
      html: emailBody,
      replyTo: email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Email sent successfully",
      emailId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);