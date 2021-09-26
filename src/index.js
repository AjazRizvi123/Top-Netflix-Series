// import React from 'react'
// import ReactDom from 'react-dom'
// import Card from './Card'
// import sdata from './Sdata'
// import './index.css'


//  const ncards = (val)=>{

//   return(<>
//   <Card src= {val.src} 
//   title={val.title} 
//   sname={val.sname} 
//   link={val.link}/> </>)
// }

// ReactDom.render(
//   <>

//     <h1 className="heading"> List Of Top Netflix Series ("COMPLE ON REACT_JS)</h1>

//     {/* <Card src= {sdata[0].src} 
//     title={sdata[0].title} 
//     sname={sdata[0].sname} l
//     ink={sdata[0].link}/>
 
//     <Card src= {sdata[1].src}
//      title={sdata[1].title} 
//      sname={sdata[1].sname} 
//      link={sdata[1].link}/>
    
//     <Card src= {sdata[2].src} 
//     title={sdata[2].title} 
//     sname={sdata[2].sname} 
//     link={sdata[2].link}/>

//     <Card src= {sdata[3].src}
//      title={sdata[3].title} 
//      sname={sdata[3].sname} 
//      link={sdata[3].link}/>

//     <Card src= {sdata[4].src} 
//     title={sdata[4].title} 
//     sname={sdata[4].sname} 
//     link={sdata[4].link}/>

// <Card src= {sdata[5].src} 
//     title={sdata[5].title} 
//     sname={sdata[5].sname} 
//     link={sdata[5].link}/> */}

//     {sdata.map(ncards)}
//   </>, document.getElementById("root")
// )

import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Card from './Card'
import data from './Sdata'

const netflixcards = (val)=>{
  return(
    <>
      <Card src= {val.src}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
    </>
  )
}

ReactDom.render(
  <>
    <h1 className="heading"> TOP NETFLIX SHOW (COMPLE ON REACT_JS)</h1>
    {data.map(netflixcards)}
  </>, document.getElementById("root")
)
