import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'

export default function Blog() {
    return (
        <>
            <Head>
                <>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title> Tech - Emad Dev</title>
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
                <h1>Our Post</h1>
            </section>
            {/* Blog Page Section Start */}
            <section className="blog-content">
                <div className="row">
                    <div className="blog-left">
                        <h2>Our Certificate &amp; Online Program</h2>
                        <h5>Nov 20, 2023</h5>
                        <Image width={400} height={250} src="/img/post.png" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                            dolor consequatur, nobis quae obcaecati delectus at aspernatur,
                            placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit
                            odit cumque, quos doloribus sint id aperiam eius aliquam quo modi
                            sequi rem quia exercitationem laborum, ratione expedita! Deleniti
                            velit officia incidunt illum.
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
                            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
                            nobis labore pariatur, esse vitae amet repellendus libero architecto
                            nisi facere unde ducimus perspiciatis, laudantium alias porro.
                            Sapiente voluptatem eligendi at voluptatum optio facilis?
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
                            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
                            nobis labore pariatur, esse vitae amet repellendus libero architecto
                            nisi facere unde ducimus perspiciatis, laudantium alias porro.
                            Sapiente voluptatem eligendi at voluptatum optio facilis?
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
                            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
                            nobis labore pariatur, esse vitae amet repellendus libero architecto
                            nisi facere unde ducimus perspiciatis, laudantium alias porro.
                            Sapiente voluptatem eligendi at voluptatum optio facilis?
                        </p>
                        <div className="comment-box">
                            <h3>Leave a Comment</h3>
                            <form className="comment-form">
                                <input type="text" placeholder="Enter Name" />
                                <input type="email" placeholder="Enter Email" />
                                <textarea rows={5} placeholder="Your Comment" defaultValue={""} />
                                <button type="submit" className="hero_btn btn">
                                    POST COMMENT
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="blog-right">
                        <h3>Post Categories</h3>
                        <div>
                            <span>Business Analytics</span>
                            <span>12</span>
                        </div>
                        <div>
                            <span>Machine Learning</span>
                            <span>29</span>
                        </div>
                        <div>
                            <span>Computer Science</span>
                            <span>15</span>
                        </div>
                        <div>
                            <span>Data Analytics</span>
                            <span>22</span>
                        </div>
                        <div>
                            <span>Full Stack</span>
                            <span>20</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Page Section end */}
            {/* Footer Section start */}
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
                <p>
                    Made with <i className="fas fa-heart" /> by{" "}
                    <a href="https://www.linkedin.com/in/imad-ahmad-6a6837121/">Emmad Ahmad Usmani</a>
                </p>
                
            </section>
            {/* Footer Section end */}
            <Script id=" " src="/js/script.js"> </Script>
            <Script src="https://kit.fontawesome.com/2ea199ddc1.js" crossOrigin="anonymous"></Script>
        </>
    )
}
