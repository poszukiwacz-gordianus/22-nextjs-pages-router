import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({
      success: false,
      message: "Please make a POST request",
    });

  const contactData = {
    fullName: "Gordi",
    email: "test",
    subject: "booking",
    message: "Hey",
  };

  const { error } = await supabase.from("contact").insert([contactData]);

  if (error)
    // Error message
    res.status(500).json({
      success: false,
      message: "Could not send your message. Please try again",
    });

  // Success message
  res.status(200).json({
    success: true,
    message: "Thanks for your mesage we will be in touch soon :)",
  });
}
