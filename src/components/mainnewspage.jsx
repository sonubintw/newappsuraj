import { useEffect, useState } from "react"
import NewItem from "./newItem"
import { useParams } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import red from "../components/load.gif" 

//'https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=ee51a0a154af47149f653fc503cd7275&pageSize=6'

function Mainnewspage() {
  
  const [articles, setArticles] = useState([])
  const [page,setPage]=useState(1)//default page is 1 in api documention itself thats y
  const [isdisable, setisdisable] = useState(true);

  let {id}=useParams()//getting paramaters from url

  const undef=()=>{
    if(id === undefined){
      return "general"
    }
    else{
      return id
    }
  }

  let zzz=undef()

//checking
  
// console.log("from above ==========  "+ category)
  // const news = async () => {
    
  //   console.log(zzz)
  //   let api = `https://newsapi.org/v2/top-headlines?category=${zzz}&country=in&apiKey=ee51a0a154af47149f653fc503cd7275&pageSize=6`
  //   // console.log(api)
  //   let data = await fetch(api)
  //   let parsedData = await data.json()
  //   let og1=parsedData.articles
  //   let filterData=og1.filter(elem=>elem.urlToImage!==null)
  //   setArticles(filterData)
  //   // console.log(filterData)
   

  // }

  useEffect(()=>{
    
    const news = async () => {
      // console.log(isdisable)
      // console.log(zzz)
      let api = `https://newsapi.org/v2/top-headlines?category=${zzz}&country=in&apiKey=ee51a0a154af47149f653fc503cd7275&pageSize=6`
      // console.log(api)
      
      let data = await fetch(api)
      
      let parsedData = await data.json()
     
      let og1=parsedData.articles
 
      let filterData=og1.filter(elem=>elem.urlToImage!==null)
      setArticles(filterData)
      
      // console.log(filterData)
  
    }
    news()
  },[zzz])
//code i wrote but needed some tweaks to work 
  // const moreNews= async ()=>{
  //   try {
  //     console.log(isdisable + " before settimeout")
  //     setTimeout (async ()=>{
        
  //       setisdisable(false)
  //       setPage(page+1)
  //       const apiMore=`https://newsapi.org/v2/top-headlines?category=${zzz}&country=in&apiKey=ee51a0a154af47149f653fc503cd7275&page=${page + 1}&pageSize=6`
  //       let data= await fetch(apiMore)
  //       let moreParsedData= await data.json()
  //       let og2=moreParsedData.articles
  //       let filterParsedData=og2.filter(obj=>obj.urlToImage !== null)
  //       setArticles(articles.concat(filterParsedData))
        
  //     },2000)
  //   } finally{
  //     setisdisable(true)
  //   }
  // }

//code tweaked by chatGPT to fix issue
  const moreNews = async () => {
    try {
      setisdisable(false);
      console.log(isdisable + " before settimeout");
      setTimeout(async () => {
        try {
          setPage(page + 1);
          const apiMore = `https://newsapi.org/v2/top-headlines?category=${zzz}&country=in&apiKey=ee51a0a154af47149f653fc503cd7275&page=${page + 1}&pageSize=6`;
          let data = await fetch(apiMore);
          let moreParsedData = await data.json();
          let og2 = moreParsedData.articles;
          let filterParsedData = og2.filter((obj) => obj.urlToImage !== null);
          setArticles([...articles, ...filterParsedData]);
        } catch (error) {
          console.log(error);
        } finally {
          setisdisable(true);
        }
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  

  
  
  
  // useEffect(() => {
    
  // },[id]);

  


  return (

  <>
  {/* <LoadingBar color="red" progress={progress} waitingTime={500} /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
  <LoadingBar color="red" progress={100} waitingTime={500} />
  {articles.map((element) => {
    return (
      <div className="col-md-4" key={element.url}>
        <NewItem
          title={element.title ? element.title : ""}
          description={element.description ? element.description : ""}
          imageUrl={element.urlToImage}
          newsUrl={element.url}
        />
      </div>
    );
  })}
</div>
<div className="flex justify-center my-4">
  <button
    onClick={moreNews}
    className="bg-rose-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
  >
    More
  </button>
</div>
<div className="flex justify-center my-4">
  <img
    className="h-36 w-56 -m-16"
    src={red}
    alt="loading"
    hidden={isdisable}
  />
</div>

    </>
  )
}


export default Mainnewspage
