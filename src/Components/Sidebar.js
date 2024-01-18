import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <dl className='my-3'>
        <dt><a href="/journal">Wall Street Journal</a></dt><br/>
        <dt><a href="apple">Apple News</a></dt><br/>
        <dt><a href="/tesla">Tesla News</a></dt><br/>
        <dt><a href="/business">Business News</a></dt><br/>
        <dt><a href="/tech">TechCrunc</a></dt>
      </dl>
    </div>
  )
}
