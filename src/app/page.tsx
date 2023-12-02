import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title> NTU </title>
          <Link rel="stylesheet" href="/style.css" />
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
      <section className="header">
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
        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <a href="#" className="hero_btn">
            Visit Us To Know More
          </a>
        </div>
      </section>
      {/* Course Section Start */}
      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine" />
          <div className="Clear" />
        </div>
        <h1>
          EXPLORE OUR 60+ <br /> MAJOR PROGRAMS
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="course-col">
            <h3>Undergraduate Programs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedi
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
      {/* Course Section End */}
      {/* Campus Section Start*/}
      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine" />
          <div className="Clear" />
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="campus-col">
            <Image width={400} height={250} src="/img/Campus1.png" alt="" />
            <div className="layer">
              <h3>DELHI</h3>
            </div>
          </div>
          <div className="campus-col">
            <Image width={400} height={250} src="/img/Campus2.png" alt="" />
            <div className="layer">
              <h3>HYDERABAD</h3>
            </div>
          </div>
          <div className="campus-col">
            <Image width={400} height={250} src="/img/Campus3.png" alt="" />
            <div className="layer">
              <h3>MUMBAI</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Campus Section End */}
      {/* Facilities Section Start */}
      <section className="facilities">
        <div className="PageBlock">
          <div className="verticalLine" />
          <div className="Clear" />
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="facilities-col">
            <Image width={300} height={230} src="/img/libary.png" alt="" />
            <h3>Best Libary</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
              omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            <Image width={300} height={230} src="/img/playground.png" alt="" />
            <h3>Athletics</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
              omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            <Image width={300} height={220} src="/img/food.png" alt="" />
            <h3>Tasty and Healthy Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
              omnis asperiores atque aperiam.
            </p>
          </div>
        </div>
      </section>
      {/* Facilities Section End */}
      {/* Testimonials Section Start */}
      <section className="testimonials">
        <div className="PageBlock">
          <div className="verticalLine" />
          <div className="Clear" />
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="testimonials-col">
            <Image width={400} height={250} src="/img/user.png" alt="oo.." />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                maiores in nostrum rerum voluptatem praesentium veritatis alias
                omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                deserunt. In quia repellat maxime.
              </p>
              <h3>Student Name</h3>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
          <div className="testimonials-col">
            <Image width={400} height={250} src="/img/user.png" alt="oo.." />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                maiores in nostrum rerum voluptatem praesentium veritatis alias
                omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                deserunt. In quia repellat maxime.
              </p>
              <h3>Student Name</h3>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-alt" />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section End */}
      {/* Call To Action Section Start */}
      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="/contact" className="hero_btn">
          CONTACT US
        </a>
      </section>
      {/* Call To Action Section End */}
      {/* Footer Section Start */}
      <section className="footer">
        <hr />
        <h4>About Us</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
          incidunt odio nam facilis, eligendi Itaque fugiat cupiditate consectetur.
          Aliquid ab deserunt exercitationem, illum molestiae dolorem.
        </p>
        <div className="icons">
          <a  href="https://www.facebook.com/piaic" target="_blank" rel="noopener noreferrer">
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
