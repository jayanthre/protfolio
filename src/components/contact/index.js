
import Loader from 'react-loaders'
import { useRef } from 'react'
import con from '../../assets/images/IMG_1639.MP4';
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_cr85zgo', 'template_odw4p8k', form.current, '73CD-IhOu-rhplvIH')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <video className='ddd' autoPlay  >
            <source src={con} type='video/mp4'/>
        </video>
        <div className="text-zone">
          <h1>  
          CONTACT ME
          </h1>
          
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        
    
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact;
