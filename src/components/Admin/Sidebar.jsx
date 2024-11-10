import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    
      <div className="pt-3">
        <Link to={'/admin'} className="btn btn-secondary w-100 bg-transparent border">DASHBOARD</Link>
        <Link to={'/admin/author'} className="btn btn-secondary w-100 bg-transparent border mt-3">AUTHOR</Link>
        <Link to={'/admin/comments'} className="btn btn-secondary w-100 bg-transparent border mt-3">COMMENTS</Link>
      </div>
    
  )
}