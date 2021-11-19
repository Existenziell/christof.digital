import sgMail from '@sendgrid/mail'


const sendMail = async (req, res) => {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_MAIL_API_KEY);

  const { name, email, message } = req.body
  const msg = {
    to: 'bauer.christof@gmail.com',
    from: 'love@christof.digital',
    subject: `Contact request from ${email}`,
    text: message
    // html: message
  }

  const {
    classes: {
      Mail,
    },
  } = require('@sendgrid/helpers');
  const mail = Mail.create(msg);
  const body = mail.toJSON();
  console.log(JSON.stringify(body));

  try {
    await sgMail.send(msg)
    res.status(200).json({ message: `Email has been sent` })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export default sendMail
