import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Contato</h1>
      <div className="text-center tracking-tighter">
        <a href="https://www.linkedin.com/in/ramon-rgs/" target="_blank" className="my-4">Linkedin</a>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p >{CONTACT.email}</p>
      </div>
    </div>
  )
}

export default Contact
