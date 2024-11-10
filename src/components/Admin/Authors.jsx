import React from 'react'

export default function Authors() {
  return (
    <div className='p-3'>
      <div className="h3 mb-3 fw-bold text-decoration-underline d-flex justify-content-between">
        <span className="slogan">Manage Authors</span>
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
                <label htmlFor="name">Fullname</label>
                <input type="text" className='form-control' id='name' placeholder='Enter name' />
              </div>
              <div className="py-2">
                <label htmlFor="address">Address</label>
                <input type="text" className='form-control' id='address' placeholder='Enter Address' />
              </div>
              <div className="py-2">
                <label htmlFor="contact">Contact</label>
                <input type="text" className='form-control' id='contact' placeholder='Enter Contact Number' />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>

      <section>
          <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark Zuckerberg</td>
            <td>Hells Kitchen, los Angles</td>
            <td>+8798431577</td>
            <td>
              <div className="dropdown">
                <span className="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
