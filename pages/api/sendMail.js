import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_MAIL_API_KEY);

export default async (req, res) => {
  const { name, email, message } = req.body
  const msg = {
    to: 'bauer.christof@gmail.com',
    from: 'love@christof.digital',
    subject: `Contact request from LOVE`,
    text: "Hello"
    // html: message
  }

  try {
    await sgMail.send(msg)
    res.status(200).json({ message: `Email has been sent` })
  } catch (error) {
    res.status(500).json({ error: `Error sending email ${error.message}` })
  }
}
