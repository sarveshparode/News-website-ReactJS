import React from 'react'

const NewsItem =(props)=> {

  
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return ( 
      <div className='my-3'>
            <div  className="card" >
              <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:'0'} }>  <span className="badge rounded-pill bg-warning text-dark" >{source}
                         <span class="visually-hidden"></span>
                            </span></div>
          
                <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ScX6Y6_Q2hikXb3RXw4B3D43nd63zSay2A&s":imageUrl} style={{width:'200px',height:'80'}} className="card-img-top" alt="..."/>
            <div  className="card-body">
                <h5  className="card-title">{title}</h5>
                <p  className="card-text">{description}</p>
                <p className='card-text'><small className='text-danger'>By {!author?"Unknown":author} on  {new Date(date).toGMTString()}</small></p>
                <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm  btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  
}

export default NewsItem
