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
                    English, Deutsch, Français, Español, Catalán ッ
                </p>
            } />
            <Social />

            <div className='px-4 pt-8 pb-0 sm:px-12 mt-6 shadow w-full bg-cover bg-no-repeat bg-poly rounded-lg bg-white/10 backdrop-blur-md text-white'>
                <form onSubmit={submitForm}>
                    <div className='relative mb-8'>
                        <input id='name' name='name' type='text' onChange={setData} required disabled={sending} className='peer h-10 w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4' placeholder='Name' />
                        <label htmlFor='name'
                            className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-300 peer-focus:text-sm'>Name</label>
                    </div>
                    <div className='relative mb-8'>
                        <input id='email' type='email' name='email' onChange={setData} required disabled={sending} className='peer h-10 w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4' placeholder='Email' />
                        <label htmlFor='email'
                            className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-300 peer-focus:text-sm'>Email</label>
                    </div>
                    <div className='relative'>
                        <textarea id='message' name='message' onChange={setData} rows='10' required disabled={sending} className='peer h-full w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4 py-4' placeholder='Message'></textarea>
                        <label htmlFor='message'
                            className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-300 peer-focus:text-sm'>Message</label>
                    </div>

                    {errorMsg ?
                        <div className='text-left bg-brand text-white p-4'>
                            {errorMsg}
                        </div>
                        :
                        sending ?
                            <div className='mt-4 text-left h-16'>
                                <PacmanLoader color={'white'} size={30} />
                            </div>
                            :
                            <input type='submit' className='button' aria-label='Send Contact Form'></input>
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
