import connectDB from "../../server/lib/dbConnect.js";
import FormData from "../../server/models/contactForm.js";
await connectDB();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).json({ success: true, data: formData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error });
  }
}
