import React from 'react'
import "./main.css"

function Main() {
  return (
    <main className='flex'>
      <section className='left-section flex'>
        <button className='active'>All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>
      <section className='flex right-section'>
       {["aa", "aa", "cc",1,2].map((item) =>{
        return(
          <article key={item} className="card">
          <img src="./images/background1.png" alt="" />
          <div style={{width: "266px"}} className="box">
            <h1 className='title'>Loading Page 2</h1>
            <p className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque fugiat optio repudiandae unde, aperiam itaque blanditiis voluptatum assumenda esse nihil dicta sequi voluptas quam nisi pariatur similique omnis saepe ut!</p>
            <div className="flex icons">
              <div style={{gap: '11px'}} className='flex'>
                <div className="icon-link"></div>
                <div className="icon-github"></div>
              </div>
              <a className="link flex" href="">more <span style={{alignSelf: "end"}} className='icon-arrow-right'></span></a>
            </div>
          </div>
          </article>
        )
       } )}
      </section>
    </main>
  )
}

export default Main