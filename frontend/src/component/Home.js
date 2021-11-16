import React, { useState, useEffect } from "react";
import axios from "axios";
import sound from "../component/voice.mp3";
import sound1 from "../component/11.mp3";
import sound2 from "../component/222.mp3";
import sound3 from "../component/66.mp3";
import sound4 from "../component/333333.mp3";
import sound5 from "../component/voice.mp3";
import {AiFillPlayCircle} from "react-icons/ai"
import {FaHeart} from "react-icons/fa"
import "./Home.css"


export default function Home() {
  const [bookAree, setbookAree] = useState([]);
  // const [newSearch,setNewSearch] = useState("");
  const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");
  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/bookAree");
    setbookAree(result.data);
  }, []);
// const searchBodkast = (e) =>{
//   setNewSearch(e.target.value)
// };
//  const searchd=async()=>{
  //  console.log(newSearch);
  //  const res = await axios.get(`http://localhost:5000/serch/:name/${newSearch}`);
  //  setbookAree(res.data);
//   setNewSearch(e.target.value)
//  }

    useEffect(()=>{
            const fetchData = async ()=> {
                    // try{
                        const res = await axios.get('http://localhost:5000/bookAree');
                        setFilterd(res.data);
                    // }
                    // catch(err){
                    //     throw new Error(err);
                    // }
                  };
                  fetchData();
        },[]);
        useEffect(()=> {
            const results = filtered.filter(res=> result && res.name.toLowerCase().includes(result)
            );
            setData(results)
        } ,[result])
        //console.log(data)
      const onChange =(e)=> {
            console.log(e.target.value);
            const searchArr = bookAree.filter(ele=>{
              return ele.name.includes(e.target.value) 
            })
            setbookAree(searchArr)
        }
    useEffect(async() => {
       const result = await axios.get("http://localhost:5000/bookAree");
       setbookAree(result.data);
    },[])


  const s1 = new Audio(sound);
  const s2 = new Audio(sound1);
  const s3 = new Audio(sound2);
  const s4 = new Audio(sound3);
  const s5 = new Audio(sound4);
  const s6 = new Audio(sound5);


  const play = (i) => {
    if (bookAree[i].id == 1) {
      s1.play();
    } else if (bookAree[i].id == 2) {
      s2.play();
    } else if (bookAree[i].id == 3) {
      s3.play();
    }
    else if (bookAree[i].id == 4) {
      s4.play();
    }else if (bookAree[i].id == 5) {
      s5.play();
    }else if (bookAree[i].id == 6) {
      s6.play();
    }
  };
  // const prod =new Audio
  // const start = () => {
  //   prod.play();
  // };
  // const likedstyle = {
  //   fontSize: 40,
  //   color: "red",
  // };
  // const likedstyle2 = {
  //   fontSize: 40,
  //   color: "grey",
  // };
  const toogleLike = async (id) => {
    // STEP1: Make a copy of state
    const newSatet = [...bookAree];
    //STEP2:GET Targeted id
    let index = newSatet.findIndex((obj) => obj.id == id);
    // STEP3: Change TargetedLike; immutable & mutable
    newSatet[index].liked = !newSatet[index].liked;
    //STEP4: Store New State After update It
    setbookAree(newSatet);
    let res = await axios.patch(`http://localhost:5000/bookeAree/${id}`);
    console.log(res);
  };

  return (

    <div>

      <div>
      {/* <button>search</button> */}
        <input className="inp" type="text" onChange={onChange}/>
     
      </div>
      {data.map((bookAree,i)=>{
       <div key={i}>
       <h3>{bookAree.name}</h3>
       <hr/>
       <img   src={bookAree.img}/>
       </div>
      })}
      <h1> *PODCAST*</h1>

      {console.log(bookAree,"hhh")}
      <div className="cards">
        {bookAree.map((element,i)=>{
          return <div className="card">
            <img className="imgCard" src={element.img}  />
            <p className="nam1">{element.name}</p>
             <AiFillPlayCircle className="playIcon" onClick={() => {play(i)}} />
             <FaHeart className={element.liked === true ? "redHeartIcon":"grayHeartIcon"} onClick={() => toogleLike(element.id)} />
          </div>
        })}
      </div>
    </div>
    
  );
}




