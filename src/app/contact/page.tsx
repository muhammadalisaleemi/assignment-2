import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'

export default function Blog() {
    return (<>
        <Head>
            <>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title> NTU </title>
                <Link rel="stylesheet" href="style.css" />
                <Link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                />
                <Link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
                />
            </>
        </Head>

        <section className="Sub-header">
            <nav>
                <a href="/" className="logo">
                    Max
                    <i className="fab fa-staylinked" />
                    Skill
                </a>
                <div className="nav-links" id="navLinks">
                    {/* Reposnive bar open and close */}
                    <i className="fa fa-times" on-Click="hideMenu()" />
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/course">Course</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <i className="fa fa-bars" on-Click="showMenu()" />
                {/* Reposnive bar open and close */}
            </nav>
            <h1>Contact Us</h1>
        </section>
        {/* Contact Us Section Start */}
        <section className="loacation">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7058323.113644929!2d63.70884282140395!3d30.252847372048855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922691a933f5799%3A0xa682cbec18d4c416!2sRector%20Office%2C%20National%20Textile%20University%2C%20Faisalabad!5e0!3m2!1sen!2s!4v1700431124533!5m2!1sen!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                loading="lazy"
            />
        </section>
        <section className="contact-us">
            <div className="row">
                <div className="content-col">
                    <div>
                        <i className="fa fa-home" />
                        <span>
                            <h5>F46X+QFW, Manawala, Rector Office, National Textile University, Faisalabad   </h5>
                            <p>Faisalabad, Punjab, Pakistan</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-phone" />
                        <span>
                            <h5>+91 3070067959</h5>
                            <p>Monday To Saturday, 9AM To 1AM</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-envelope" />
                        <span>
                            <h5>em.madi.don@gmail.com</h5>
                            <p>Email Us Yor Query</p>
                        </span>
                    </div>
                </div>
                <div className="content-col">
                    <form>
                        <input type="text" placeholder="Enter Name" />
                        <input type="email" placeholder="Enter Email" />
                        <input type="text" placeholder="Enter Subject" />
                        <textarea
                            rows={8}
                            placeholder="Message"

                            defaultValue={""}
                        />
                        <button type="submit" className="hero_btn btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
        {/* Contact Us Section End */}
        {/* Footer Section Start */}
        <section className="footer">
            <hr />
            <h4>About Us</h4>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
                incidunt odio nam facilis, eligendi
                <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
                exercitationem, illum molestiae dolorem.
            </p>
            <div className="icons">
                <a href="https://www.facebook.com/piaic" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.instagram.com/piaicofficial/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" />
                </a>
                <a href="https://twitter.com/imadusmani" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter" /></a>
                <a href="https://www.linkedin.com/in/imad-ahmad-6a6837121/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" /></a>
            </div>
      
        </section>
        {/* Footer Section End */}
        <Script id=" " src="/js/script.js"> </Script>
        <Script src="https://kit.fontawesome.com/2ea199ddc1.js" crossOrigin="anonymous"></Script>
    </>
    )
}
