import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const {hits, loading, removeStory} = useGlobalContext(); 

  if(loading){
    return <div className='loading'></div>
  }

  return (
    <section className='stories'>
      {
        hits.map((story)=>{
          const {objectID, title, num_comments, url, points, author} = story; 
          return (
              <article key={objectID} className="story">
                  <h4 className="title">{title}</h4>
                  <p className="info">
                      {points} points by {author} |{" "}
                      <span> {num_comments} comments</span>
                  </p>
                  <div>
                      <a
                          className="read-link"
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          read more
                      </a>
                      <button
                          className="remove-btn"
                          onClick={() => removeStory(objectID)}
                      >
                          remove
                      </button>
                  </div>
              </article>
          );
        })
      }
    </section>
  )
}

export default Stories
