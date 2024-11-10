import React from 'react'

export default function Comments() {
  return (
    <div className='p-3'>
      <div className="h3 mb-3 fw-bold text-decoration-underline d-flex justify-content-between">
      <span className="slogan">Manage Comments</span>

      </div>
      <section>
          <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col">Blog Author</th>
            <th scope="col">Blog Title</th>
            <th scope="col">Comment</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Title</td>
            <td>
              <p className='line-limit-3 m-0'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis vel quo quae dolorem!
              </p>
            </td>
            <td>
              <div className="btn btn-secondary">Delete</div>
            </td>
          </tr>
        </tbody>
      </table>

      </section>
    </div>
  )
}
