import { useState } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import Blob from '../components/Blob'
import PacmanLoader from 'react-spinners/PacmanLoader'

const Contact = () => {
    const [formData, setFormData] = useState()
    const [sending, setSending] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    function setData(e) {
        const { name, value } = e.target
        setFormData({ ...formData, ...{ [name]: value } })
    }

    const submitForm = async e => {
        e.preventDefault()
        setSending(true)

        try {
            const res = await fetch('/api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            res.ok ?
                Router.push('/success')
                :
                setErrorMsg(`Sorry, an error occured: ${res.statusText}`)
        } catch (error) {
            setErrorMsg('Sorry, an error occured. Have you tried turning it off and on again?')
        }
    }

    return (
        <div className='flex flex-col items-center justify-content text-center w-full'>
            <h1 className='text-2xl mb-8'>Write me something nice :)</h1>

            <Blob node={
                <p className='bg-white px-8 py-5 rounded dark:bg-gray-700 dark:text-gray-200 leading-relaxed'>
                    I am excited to hear from you!<br />
                    Please, feel free to write in your own language.<br />
                    Languages I understand without Google Translate are:<br />
                    English, Deutsch, Français, Español, Catalán and नेपाली (well, the basics ッ).
                </p>
            } />

            <div className='p-4 sm:p-12 mt-6 shadow w-full lg:w-2/3 bg-white dark:bg-black dark:text-gray-300 bg-gradient-to-b from-secondary to-primary'>
                <form onSubmit={submitForm} className='flex flex-col space-y-6'>
                    <input type='text' name='name' placeholder='Name' onChange={setData} required></input>
                    <input type='email' name='email' placeholder='Email' onChange={setData} required></input>
                    <textarea placeholder='I am no robot...' name='message' onChange={setData} rows='10' required></textarea>

                    {errorMsg ?
                        <div className='text-left bg-red-700 text-white p-4'>
                            {errorMsg}
                        </div>
                        :
                        sending ?
                            <div className='mt-4 text-left h-16'>
                                <PacmanLoader color={'var(--color-brand)'} size={30} />
                            </div>
                            :
                            <input type='submit' className='button' aria-label='Send Contact Form' value='Send'></input>
                    }
                </form>
            </div>
        </div>
    )
}

Contact.getLayout = function getLayout(page) {
    return (
        <Layout title='Contact'>
            {page}
        </Layout>
    )
}

export default Contact
