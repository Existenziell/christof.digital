import { useState } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import Social from '../components/Social'

const Contact = () => {

    const [formData, setFormData] = useState()

    function setData(e) {
        const { name, value } = e.target
        setFormData({ ...formData, ...{ [name]: value } })
    }

    const submitForm = (e) => {
        e.preventDefault()
        // console.log(formData)

        // ToDo: send formData to server & deliver mail
        setTimeout(() => {
            Router.push('/success')
        }, 4000)
    }

    return (
        <div className="flex flex-col items-center justify-content text-center w-full">
            <h1 className="text-2xl mb-8">Write me something nice :)</h1>

            <div className="p-12 mt-6 shadow w-full lg:w-1/2  bg-white">
                <form onSubmit={submitForm} className="flex flex-col space-y-6 ">
                    <input type="text" name="name" placeholder="Your Name" onChange={setData}></input>
                    <input type="email" name="email" placeholder="Your Email" onChange={setData}></input>
                    <textarea placeholder="Your Message" name="message" onChange={setData} rows="10"></textarea>
                    <input type="submit" className='button'></input>
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
