import React, { useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
                
const News=(props)=> {
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setpage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 

  const updateNews= async()=> {
    props.setProgress(10);
    const url = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=eaffb0be1ce3408ab3102c675c3a16a1&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(200);
  }
   useEffect(()=>{
    document.title = `${capitalizeFirstLetter(props.category)} -News`;
    updateNews();
    // eslint-disable-next-line
   },[])


  // const handlePreClick = async () => {
    //  Async functions are a powerful feature in JavaScript that allow us to write cleaner, more readable code when handling asynchronous operations such as API calls, timeouts, and promises. React.
    //  console.log("Previous");
    //  let url=
    //  `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b2111032b846403aaf59bdb65312c798&page=${this.state.page -1}&pageSize=${props.pageSize}`;
    //  this.setState({loading:true});
    //  let data= await fetch(url);
    //  let parsedData= await data.json()
    //  this.setState({
    //      page:this.state.page-1,
    //      articles:parsedData.articles,
    //      loading:false
    //  })
  //   setpage(page-1)
  //   updateNews();
  // };
  // const handleNextClick = async () => {
    //   console.log("Next");
    //   if (!(this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize))){
    //       let url = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b2111032b846403aaf59bdb65312c798&page=${this.state.page +1}&pageSize=${props.pageSize}`;
    //       this.setState({loading:true});
    //       let data= await fetch(url);
    //       let parsedData= await data.json()

    //       this.setState({
    //           page:this.state.page+1,
    //           articles:parsedData.articles,
    //           loading:false

    //       })

    // }
   
  //   setpage(page+1)
  //   updateNews();
  // };

  const fetchMoreData = async () => {
   
    const url = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=eaffb0be1ce3408ab3102c675c3a16a1&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };


 
    return (
      <>
        <h1 className="text-center" style={{ margin: "40px 0px",marginTop:'90px' }}>
          News - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
           {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return   <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
              />
            </div> 
            })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );
}
export default News;
