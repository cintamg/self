import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <dl className='my-3'>
        <di><a href="/journal">Wall Street Journal</a></di><br/>
        <di><a href="apple">Apple News</a></di><br/>
        <di><a href="/tesla">Tesla News</a></di><br/>
        <di><a href="/business">Business News</a></di><br/>
        <di><a href="/tech">TechCrunc</a></di>
      </dl>
    </div>
  )
}
