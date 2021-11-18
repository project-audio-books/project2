import React, { useState, useEffect } from "react";
import axios from "axios";
import sound from "../component/voice.mp3";
import sound1 from "../component/11.mp3";
import sound2 from "../component/222.mp3";
import sound3 from "../component/66.mp3";
import sound4 from "../component/333333.mp3";
import sound5 from "../component/voice.mp3";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  const [bookAree, setbookAree] = useState([]);
  const [data, setData] = useState([]);
  const [filtered, setFilterd] = useState([]);
  const [result, setResult] = useState("");

  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/bookAree");
    setbookAree(result.data);
  }, []);

  // قرأة البيانات من الباك اند

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get("http://localhost:5000/bookAree");
  //     setFilterd(res.data);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const results = filtered.filter(
      (res) => result && res.name.toLowerCase().includes(result)
    );
    setData(results);
  }, [result]);

  // الوظيفه
  //  البحث عن البيانات ب اقل عدد من الحروف

  //console.log(data)
  const onChange = (e) => {
    console.log(e.target.value);
    const searchArr = bookAree.filter((ele) => {
      return ele.name.includes(e.target.value);
    });
    setbookAree(searchArr);
  };

  // كيف تلف على العناصر

  const s1 = new Audio(sound);
  const s2 = new Audio(sound1);
  const s3 = new Audio(sound2);
  const s4 = new Audio(sound3);
  const s5 = new Audio(sound4);
  const s6 = new Audio(sound5);

  // تعريف للاصوات
  const play = (i) => {
    if (bookAree[i].id == 1) {
      s1.play();
    } else if (bookAree[i].id == 2) {
      s2.play();
    } else if (bookAree[i].id == 3) {
      s3.play();
    } else if (bookAree[i].id == 4) {
      s4.play();
    } else if (bookAree[i].id == 5) {
      s5.play();
    } else if (bookAree[i].id == 6) {
      s6.play();
    }
  };

  // لما اختار 1 اي دي يشغل الصوت رقم 1 وكذا

  const toogleLike = async (id) => {
    const newSatet = [...bookAree];
    // نعمل نسخة للمصفوفه
    let index = newSatet.findIndex((obj) => obj.id == id);
    // اجيب id
    newSatet[index].liked = !newSatet[index].liked;
    // تغيير قيمة اللايك
    setbookAree(newSatet);
    // تخزين القيمة الجديده

    let res = await axios.patch(`http://localhost:5000/bookeAree/${id}`);
    console.log(res);
  };

  // patch تعني التغيير على جزئ من الاوبجكت

  return (
    <div>
      <div>
        <input className="inp" type="text" onChange={onChange} />
      </div>
      {/* {data.map((bookAree, i) => {
        <div key={i}>
          <h3>{bookAree.name}</h3>
          <hr />
          <img src={bookAree.img} />
        </div>;
      })} */}

      <div className="cards">
        {bookAree.map((element, i) => {
          return (
            <div className="card">
              <img className="imgCard" src={element.img} />
              <p className="nam1">{element.name}</p>
              <AiFillPlayCircle
                className="playIcon"
                onClick={() => {
                  play(i);
                }}
              />
              <FaHeart
                className={
                  element.liked === true ? "redHeartIcon" : "grayHeartIcon"
                }
                onClick={() => toogleLike(element.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
