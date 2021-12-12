import { useState } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import Blob from '../components/Blob'
import Social from '../components/Social'
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
        <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:w-2/3 lg:mx-auto'>
            <h1 className='text-4xl md:text-6xl mb-8'>Let&apos;s connect</h1>

            <Blob node={
                <p className='bg-white px-8 py-5 rounded dark:bg-gray-700 dark:text-gray-200 leading-relaxed'>
                    I am excited to hear from you!<br />
                    Please, feel free to write in your own language.<br />
                    Languages I understand without Google Translate are:<br />
                    English, Deutsch, Français, Español, Catalán and नेपाली (well, the basics ッ).
                </p>
            } />
            <Social />

            <div className='px-4 py-8 sm:p-12 mt-6 shadow w-full bg-white dark:bg-gray-700'>
                <form onSubmit={submitForm}>

                    <div className='relative mb-12'>
                        <input type='text' name='name' placeholder='Name' onChange={setData} required disabled={sending} className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand dark:bg-gray-700 dark:text-gray-300'></input>
                        <label htmlFor='name' className='absolute left-0 -top-4 text-gray-600 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm dark:peer-focus:text-gray-300'>Name</label>
                    </div>
                    <div className='relative mb-12'>
                        <input type='email' name='email' placeholder='Email' onChange={setData} required disabled={sending} className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand dark:bg-gray-700 dark:text-gray-300'></input>
                        <label htmlFor='email' className='absolute left-0 -top-4 text-gray-600 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm dark:peer-focus:text-gray-300'>Email</label>
                    </div>
                    <div className='relative'>
                        <textarea id='message' placeholder='Message' name='message' onChange={setData} rows='10' required disabled={sending} className='peer h-full w-full py-4 border-t-2 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand dark:bg-gray-700 dark:text-gray-300'></textarea>
                        <label htmlFor='message' className='absolute left-0 -top-5 text-gray-600 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm dark:peer-focus:text-gray-300'>Message</label>
                    </div>

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
