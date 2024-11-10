import React from 'react'
import './Blog.css';

export default function Comments() {
  return (
    <div className="commentSection">
        <div className="submitComment px-2">
            <h3 className="h3 text-center py-3">Add Comment</h3>
            <textarea className='form-control shadow-none' rows={3}></textarea>
            <button className="btn btn-dark my-2">Submit</button>
        </div>

        <div className="allCommemts">
            <h3 className="h3 text-center py-3">All Comments</h3>
            <div className="comment">
                <div className="comment-user">User 1</div>
                <div className="comment-text">This is a great blog post!</div>
            </div>
            <div className="comment">
                <div className="comment-user">User 2</div>
                <div className="comment-text">I agree with User 1.</div>
            </div>
            <div className="comment">
                <div className="comment-user">User 3</div>
                <div className="comment-text">I think this is a good idea.</div>
            </div>
        </div>
    </div>
  )
}
