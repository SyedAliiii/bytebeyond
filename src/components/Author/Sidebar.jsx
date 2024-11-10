import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    
      <div className="pt-3">
        <Link to={'/author'} className="btn btn-secondary w-100 bg-transparent border">DASHBOARD</Link>
        <Link to={'/author/comments'} className="btn btn-secondary w-100 bg-transparent border mt-3">COMMENTS</Link>
      </div>
    
  )
}