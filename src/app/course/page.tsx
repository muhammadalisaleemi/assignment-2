import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
export default function Course() {
    return (
        <>
            <Head>
                <>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title> Tech - Ali Dev</title>
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
                <h1>Our Courses</h1>
            </section>
            {/* course start */}
            <section className="course">
                <h1>Course We Offer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div className="row">
                    <div className="course-col">
                        <h3>Undergraduate Programs</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                            dolor corporis, commodi nihil quas soluta labore quisquam impedit
                            distinctio explicabo aut minima quos pariatur unde aliquam earum
                            laborum velit non.
                        </p>
                    </div>
                    <div className="course-col">
                        <h3>Graduate Programs</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                            dolor corporis, commodi nihil quas soluta labore quisquam impedit
                            distinctio explicabo aut minima quos pariatur unde aliquam earum
                            laborum velit non.
                        </p>
                    </div>
                    <div className="course-col">
                        <h3>Adult Learning &amp; Degree Completion</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                            dolor corporis, commodi nihil quas soluta labore quisquam impedit
                            distinctio explicabo aut minima quos pariatur unde aliquam earum
                            laborum velit non.
                        </p>
                    </div>
                </div>
            </section>
            {/* course end */}
            {/* best course start */}
            <section className="facilities">
                <h1>Best Courses</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div className="row">
                    <div className="facilities-col">
                        <Image width={400} height={200} src="/img/course1.png" alt="" />
                        <h3>Web Development</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                            omnis asperiores atque aperiam.
                        </p>
                    </div>
                    <div className="facilities-col">
                        <Image width={400} height={200} src="/img/course2.png" alt="" />
                        <h3>Artificial Intelligence</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                            omnis asperiores atque aperiam.
                        </p>
                    </div>
                    <div className="facilities-col">
                        <Image width={400} height={200} src="/img/course3.png" alt="" />
                        <h3>Data Science</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                            omnis asperiores atque aperiam.
                        </p>
                    </div>
                </div>
            </section>
            {/* best courses end */}
            {/* Footer start */}
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
            {/* Footer end */}
            <Script id=" " src="/js/script.js"> </Script>
            <Script src="https://kit.fontawesome.com/2ea199ddc1.js" crossOrigin="anonymous"></Script>
        </>



    )
}
