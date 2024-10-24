import User from "../../models/user.model.js";
import nodemailer from "nodemailer";
import "dotenv/config";

const contactUs = async (req, res) => {
  try {
    const { message } = req.fields;
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const fullMessage = `Name: ${user.name}\nEmail: ${user.email}\n\nMessage:\n${message}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER, 
      to: process.env.RECEIVING_EMAIL, 
      subject: "New Contact Inquiry",
      text: fullMessage, 
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Contact Us error: " + error.message,
    });
  }
};

export default contactUs;