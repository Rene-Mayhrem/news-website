import React from 'react'

export default function Comment() {
  return (
    <div className='comment-container'>
        <img alt='user' src='https://avatarfiles.alphacoders.com/266/thumb-266629.jpg'></img>
        <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
    </div>
  )
}
