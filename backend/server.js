require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Get Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappFrom = process.env.TWILIO_WHATSAPP_FROM;
const whatsappTo = process.env.TWILIO_WHATSAPP_TO;

const client = twilio(accountSid, authToken);

app.post("/api/book", async (req, res) => {
  const { name, phone, email, guests, days, title } = req.body;

  const message = `📦 *New Booking Received*\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📧 Email: ${email}\n👥 Guests: ${guests}\n🗓️ Days: ${days}\n🏖️ Package: ${title}`;

  try {
    await client.messages.create({
      from: whatsappFrom,
      to: whatsappTo,
      body: message,
    });

    res.status(200).json({ success: true, message: "Booking sent successfully via WhatsApp" });
  } catch (err) {
    console.error("❌ Error sending booking via WhatsApp:", err.message);
    console.log("📨 Pretend sending WhatsApp message with data:\n", message);

    res.status(500).json({ success: false, message: "Failed to send booking via WhatsApp" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
