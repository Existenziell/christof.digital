import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_MAIL_API_KEY)

const sendMail = async (req, res) => {
  const { name, email, message } = req.body
  const msg = {
    to: 'bauer.christof@gmail.com',
    from: 'no-reply@christof.digital',
    subject: `Contact request from ${name} - ${email}`,
    text: message,
    html: message
  }

  try {
    await sgMail.send(msg)
    res.status(200).json({ message: `Email has been sent` })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export default sendMail
