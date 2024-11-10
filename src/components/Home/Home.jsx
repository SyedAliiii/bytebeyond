import React from 'react'
import { Link } from 'react-router-dom'
import ContactUs from './ContactUs'
import Crousel from './Crousel'

export default function Home() {
  const blogs = Array.from({ length: 6 }, (_, i) => ({
    id: `id${i}`,
    title: `Title ${i}`,
    author: `Author ${i}`,
  }));
  return (
    <>
      <div className='homeContainer'>
        <Crousel/>
        <section>
          <div className="heading text-center py-4 heading_fontFamily">Latest Blogs</div>
          <div className="row m-0 justify-content-center">
            {blogs && blogs.map(({id,title,author})=>(
              <div className="col-md-4 col-12 d-flex justify-content-center" key={id}>
                <div className="blog m-3 rounded">
                  <h2 className="title">Blog Title</h2>
                  <p className="fw-bold">Author: <span className="fw-light second_fontFamily">&nbsp; James Bond</span></p>

                  <p className='line-limit-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laboriosam quaerat, rem ipsa recusandae id laborum ipsam facere vitae asperiores harum eveniet illo ducimus hic deleniti? Deserunt repellendus a rem.</p>
                  <Link to={'/blog'} className='readMore second_fontFamily'>Read More</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="_showAll"><Link to={'/blogs'} className='button'>Show All</Link></div>
        </section>
        <ContactUs/>

      </div>
    </>
  )
}
