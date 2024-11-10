import React from 'react'

export default function Dashboard() {
  return (
    <div className='p-3'>
      <div className="h3 mb-3 fw-bold text-decoration-underline d-flex justify-content-between">
      <span className="slogan">Manage Blogs</span>
      <span className="slogan pointer" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</span>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Blog</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="py-2">
                <label htmlFor="author">Author</label>
                <input type="text" className='form-control' placeholder='Enter Author Name' />
              </div>
              <div className="py-2">
                <label htmlFor="title">Title</label>
                <input type="text" className='form-control' placeholder='Enter Title' />
              </div>
                <div className="py-2">
                  <label htmlFor="blog">Blog</label>
                  <textarea type="text" className='form-control' placeholder='Enter Blog' rows={4}></textarea>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Upload</button>
            </div>
          </div>
        </div>
      </div>
      <section>
          <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Title</th>
            <th scope="col">Blog</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Title</td>
            <td>
              <p className='line-limit-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis vel quo quae dolorem! Quis iure asperiores, magni, ab tempore optio molestiae rem quae nisi dolorum distinctio quasi accusamus recusandae, quia commodi repellendus a? Repellendus, commodi totam. Obcaecati doloremque voluptate praesentium repudiandae molestiae consequatur cumque tempore, cum assumenda incidunt? Sunt fugiat debitis, quas similique est animi itaque nemo tempore qui iste commodi quibusdam cum deserunt exercitationem, dolorem eum ab in cumque ducimus eaque laudantium maxime harum? Aspernatur laudantium exercitationem ex expedita ut quo qui aut enim. Atque accusamus nesciunt tempore sapiente ducimus, beatae dolorem, non quaerat rerum explicabo, error quam.
              </p>
            </td>
            <td>
              <div className="dropdown">
                <span className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Action
                </span>
                <ul className="dropdown-menu">
                  <li><span className="dropdown-item pointer">Edit</span></li>
                  <li><span className="dropdown-item pointer">Delete</span></li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </section>
    </div>
  )
}
