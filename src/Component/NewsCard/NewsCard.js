import React from 'react';
import './styles.css';

let randomImage=()=>{
  let arr=["rabbitImage_alt.webp","puppiesImage_alt.jpg","deerImage_alt.png","cuteRabbitImage_alt.jpg"]
  
  return arr[Math.floor(Math.random()*4)];
  
}

class NewsCard extends React.Component{


// handleImage=function(){
//   console.log(" Hi "+this.state.urlToImage);
//   return this.state.urlToImage;
  
// }
constructor(props){
super(props);
this.state={image_url:this.props.urlToImage};
this.myRef=React.createRef();
//console.log("News Card constructor called"+" image :"+this.state.image_url);
}

handleDate=function(){
  let currDate=new Date();
  let pubDate=new Date(this.props.publishedAt);
  console.log(this.props.title+" "+pubDate);
  if(currDate.getHours()-pubDate.getHours()<1)
  return (Math.abs(currDate.getMinutes()-pubDate.getMinutes()))+" min. ago";
  else
  return (Math.abs(currDate.getHours()-pubDate.getHours()))+" hours ago";
}
handleHeadline=function(headline){
     let headlinearr=headline.split(" ")
  if(headlinearr.length>16){
    console.log("this is cutted "+this.props.title+" "+headline.length);
    headlinearr=headline.split(" ").slice(0,17);
    console.log("cut headline "+headlinearr.join(" "));
     return headlinearr.join(" ")+"...";
  }
  else{
    console.log("nona hut headline called "+this.props.title);
    return headline;
  }
  
}

componentDidMount(){
  console.log("bg image is "+this.myRef.current.style.backgroundImage);
  const imgtag=this.myRef.current.style.backgroundImage;
  if(imgtag==`url("null")` || imgtag=="")
  {console.log("component did mouuuuuuunttttt called and has something else"+this.myRef.current.style.backgroundImage);
  this.myRef.current.src=process.env.PUBLIC_URL+"/"+randomImage();
  console.log(this.myRef.current.src);
  }
  console.log("src image is "+this.myRef.current.src);
  // if(==null)
   // 
}

    render() {
        // return (
        //     <div className="card bg-dark text-white ">
        //         <img src= className="card-img-top" alt="no img available"/>
        //         <div className="card-body">   
        //             <h5 className="card-title"></h5>
                    
        //         </div>
        //     </div>
        // </div> )\
      // let rikku=" ";
      // if(this.props.news_pointer!=0 && this.props.news_pointer%19==0)
      // {
      //   rikku="lastCard"
      // }

      const myStyle={
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundImage:"url("+this.state.image_url+")"
      }
        return (<div className="col col-md-4 col-sm-6 col-12 m-0 mt-1 p-2 ">
        <div className="card">
        <img ref={this.myRef} style={myStyle} className="card-img-top"/>
        <div className="card-body">
          <h4 className="card-title newsHeading"><a href={this.props.urlToArticle} target="_blank" data-toggle="tooltip" data-placement="top" title={this.props.title}>{this.handleHeadline(this.props.title)}</a></h4>        
          <p className="card-text newsTime">{this.handleDate(this.props.publishedAt)}</p>
        </div>
      </div>
      </div>);
}
}


// 
export default NewsCard;

