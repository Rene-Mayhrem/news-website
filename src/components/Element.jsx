import React from 'react'

export default function Element() {
  return (
    <div id='element-container'>
        <div className='element-img'>
        <img id='element-img' alt='user' src='https://avatarfiles.alphacoders.com/266/thumb-266629.jpg'></img>
        </div>
        <div className='element-user-container'>
        <p className='element-subtext'>René Cruz</p>
        </div>
        <div className='element-date-container'>
        <p className='element-subtext'>22/Sep/2023</p>
        </div>
        <div className='element-title-container'>
        <h1>Programación Orientada a Objetos en JavaScript</h1>
        </div>
        <div className='element-labels-container'>
        <p className='element-subtext'>#javascript</p>
        <p className='element-subtext'>#poo</p>
        <p className='element-subtext'>#beginners</p>
        </div>
        <div className='element-description-container'>
        <p>Esta revista maneja los conceptos básicos 
            de la programación orientada a objetos, 
            donde se discutirán conceptos como la herencia, 
            el polimorfismo, entre otros...
        </p>
        </div>
        <div className='element-reactions-container'>
            <span class="material-symbols-outlined" id='favorite'>favorite</span>
            <label htmlFor="favorite">14</label>
            <span class="material-symbols-outlined">mode_comment</span>
            <label htmlFor="">30</label>
            <span class="material-symbols-outlined">bookmark</span>
        </div>
    </div>
  )
}
