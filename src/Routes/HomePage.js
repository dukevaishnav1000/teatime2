import './style.css';
import Navbar from '../Component/Navbar/Navbar';
import React from 'react';
import NewsCard from '../Component/NewsCard/NewsCard';



var news_pointer=-1;
var news_articles=[];

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={newsCardArray:[],loader:"block",scrolly:window.scrollY}
    }
    observer=new IntersectionObserver(entries=>{
        let entry=entries[0];
            console.log("i am called");
            if(entry.isIntersecting)
            {       
                    console.log("body is "+document.getElementsByTagName("body"))
                    this.makeCards(this)();
            }
            
        }) 

    makeCards()
    {   
        this.setState({scrolly:window.scrollY,loader:"block"})
        document.body.style.overflow="hidden";
        if(news_pointer+21<news_articles.length){
            let temp=news_pointer;
            this.setState(prev=>{return {newsCardArray:[...prev.newsCardArray,...news_articles.slice(temp+1,temp+22).map(article=>{
                console.log("first if called --- news_pointer ",++news_pointer);
                return <NewsCard title={article.title} urlToImage={article.urlToImage} urlToArticle={article.url} publishedAt={article.publishedAt} key={news_pointer} news_pointer={news_pointer}/>
            })]}})
        //     newsCardArray.push(...news_articles.slice(temp+1,temp+22).map(article=>{
        //     console.log("first if called --- news_pointer ",++news_pointer);
        //     return <NewsCard title={article.title} urlToImage={article.urlToImage} urlToArticle={article.url} publishedAt={article.publishedAt} key={news_pointer} news_pointer={news_pointer}/>
        // }))
        }
        else
        if(news_pointer<news_articles.length)
        {   let temp=news_pointer;
            var eodflag=1;
            this.setState(prev=>{
               return {newsCardArray:[...prev.newsCardArray,...news_articles.slice(temp+1,news_articles.length).map(article=>{
                console.log("second if called --- news_pointer ",++news_pointer);
                return <NewsCard title={article.title} urlToImage={article.urlToImage} urlToArticle={article.url} publishedAt={article.publishedAt} key={news_pointer}/>
                })]}
            })
            this.observer.unobserve(document.getElementsByClassName("endOfResults")[0]);
            // newsCardArray.push();
        }   
        
        console.log(this.state.newsCardArray);
       setTimeout(()=>{
        // document.getElementsByTagName("body").style.overflowY="scroll";
        console.log("body is "+document.getElementsByTagName("body")[0])
        this.setState({loader:"none"})
        document.body.style.overflow="visible";
        if(eodflag==1)
        {
        document.getElementsByClassName("endOfResults")[0].style.opacity="1";    
        }
    },1700);     
    }

    render(){
        // this.loadImage.bind(this)();
        console.log(document.getElementsByClassName("endOfResults"));
        
        return(
        <div>
            <Navbar/>
            <div className="news-container container-fluid ">
                <div className="loaderHolder" id="loaderHolder" style={{display:this.state.loader,top:window.scrollY}}><div className="loader"></div>
                </div>                
                <div className="row m-1" >
                {   
                    this.state.newsCardArray

                }
                </div>  
                <div className="endContainer">
                <p className="endOfResults" onClick={()=>{window.scrollTo(0,0)}}><a>Go to top ↑</a></p>
                </div>     
            </div>
        </div>
        )
    }

    componentDidMount(){
        console.log("ComponentDidMount called");
        this.fetchHomeData.bind(this)();     
    }

    fetchHomeData(){
        //new data will be fetched if 
        console.log("fetchHomeData called");
        
        if(news_pointer===-1)
        {   
            //us,in,uk,cn,ru,jp,au
            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=ca7e73b85d284f8094f30683304ad991`)}`).then((res)=>{
            return res.json();             
           },rej=>{
               console.log("Error while feching: ",rej)
           }).then(data=>{
                    news_articles.push(...JSON.parse(data.contents).articles);
                        //console.log(news_articles);
                        
            })
            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apiKey=ca7e73b85d284f8094f30683304ad991`)}`).then((res)=>{
            return res.json();             
           },rej=>{
               console.log("Error while feching: ",rej)
           }).then(data=>{
            news_articles.push(...JSON.parse(data.contents).articles);
                        //console.log(news_articles);
                        
            })
            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://newsapi.org/v2/top-headlines?country=uk&pageSize=20&apiKey=ca7e73b85d284f8094f30683304ad991`)}`).then((res)=>{
            return res.json();             
           },rej=>{
               console.log("Error while feching: ",rej)
           }).then(data=>{
            news_articles.push(...JSON.parse(data.contents).articles);
                        //console.log(news_articles);
                        
            })
            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://newsapi.org/v2/top-headlines?country=au&pageSize=20&apiKey=ca7e73b85d284f8094f30683304ad991`)}`).then((res)=>{
            return res.json();             
           },rej=>{
               console.log("Error while feching: ",rej)
           }).then(data=>{
            news_articles.push(...JSON.parse(data.contents).articles);
                    console.log("news-articles length",news_articles.length);    
            }).then((data)=>{
             setTimeout(()=>{this.observer.observe(document.getElementsByClassName("endOfResults")[0]);
             this.makeCards.bind(this)();
            },2000);
            })
        }
        
    }
    
}

export default HomePage;