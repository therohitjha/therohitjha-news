import React from 'react'

const SingleNews=({item})=>{
return(
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title}/>
        </div>
        <div className="card-content">
          <p className='center-align'>{item.title}</p>
        </div>
        <div className="card-action center-align" >
          <a href={item.url} target='_blank' rel="noopener noreferrer">Full News</a>
        </div>
      </div>
    </div>
)

}

export default SingleNews