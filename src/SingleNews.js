import React from 'react'

const SingleNews=({item})=>{
return(
    <div className="col s12 m6">
      <div className="card" style={{}}>
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title}/>
        </div>
        <div className="card-content">
          <p className='center-align'>{item.title}</p>
          
        </div>
        <div className="card-action">
          <a href={item.url} target='_blank' rel="noopener noreferrer">Full News</a>
        </div>
      </div>
    </div>
)

}

export default SingleNews