import { useState } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import PacmanLoader from "react-spinners/PacmanLoader"

const Contact = () => {

    const [formData, setFormData] = useState()
    const [sending, setSending] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    function setData(e) {
        const { name, value } = e.target
        setFormData({ ...formData, ...{ [name]: value } })
    }

    const submitForm = async e => {
        e.preventDefault()
        setSending(true)

        try {
            const res = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAIL_API_KEY}`,
                body: JSON.stringify(formData)
            })
            res.ok ?
                Router.push("/success")
                :
                setErrorMsg(`Sorry, an error occured: ${res.statusText}`)
        } catch (error) {
            setErrorMsg("Sorry, an error occured. Have you tried turning it off and on again?")
        }
    }

    return (
        <div className="flex flex-col items-center justify-content text-center w-full">
            <h1 className="text-2xl mb-8">Write me something nice :)</h1>

            <div className="p-12 mt-6 shadow w-full lg:w-1/2 bg-white">
                <form onSubmit={submitForm} className="flex flex-col space-y-6 ">
                    <input type="text" name="name" placeholder="Your Name" onChange={setData} required></input>
                    <input type="email" name="email" placeholder="Your Email" onChange={setData} required></input>
                    <textarea placeholder="Your Message" name="message" onChange={setData} rows="10" required></textarea>

                    {errorMsg ?
                        <div className='text-left bg-red-700 text-white p-4'>
                            {errorMsg}
                        </div>
                        :
                        sending ?
                            <div className="mt-4 text-left h-16">
                                <PacmanLoader color={"var(--color-brand)"} size={30} />
                            </div>
                            :
                            <input type="submit" className='button'></input>
                    }
                </form>
            </div>
        </div>
    )
}

Contact.getLayout = function getLayout(page) {
    return (
        <Layout title="Contact">
            {page}
        </Layout>
    )
}

export default Contact
