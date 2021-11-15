import React, { useState, useEffect } from "react";
import axios from "axios";
import sound from "../component/voice.mp3";
import sound1 from "../component/11.mp3";
import sound2 from "../component/222.mp3";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  const [bookAree, setbookAree] = useState([]);
  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/bookAree");
    setbookAree(result.data);
  }, []);

  // const useAudio = url => {
  //   const [audio] = useState(new Audio(url));
  //   const [playing, setPlaying] = useState(false);

  //   const toggle = () => setPlaying(!playing);

  //   useEffect(() => {
  //       playing ? audio.play() : audio.pause();
  //     },
  //     [playing]
  //   );

  //   useEffect(() => {
  //     audio.addEventListener('ended', () => setPlaying(false));
  //     return () => {
  //       audio.removeEventListener('ended', () => setPlaying(false));
  //     };
  //   }, []);

  //   return [playing, toggle];
  // };

  const s1 = new Audio(sound);
  const s2 = new Audio(sound1);
  const s3 = new Audio(sound2);
  const play = (i) => {
    if (bookAree[i].id == 1) {
      s1.play();
    } else if (bookAree[i].id == 2) {
      s2.play();
    } else if (bookAree[i].id == 3) {
      s3.play();
    }
  };
  const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
      <div>
        <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      </div>
    );
  };

  // const prod =new Audio
  // const start = () => {
  //   prod.play();
  // };
  const likedstyle = {
    fontSize: 40,
    color: "red",
  };
  const likedstyle2 = {
    fontSize: 40,
    color: "grey",
  };
  const toogleLike = (id) => {
    // STEP1: Make a copy of state
    const newSatet = [...bookAree];
    //STEP2:GET Targeted id
    let index= newSatet.findIndex(({id}) => id == id);
    // STEP3: Change TargetedLike; immutable & mutable
    newSatet[index].liked = !newSatet[index].liked;
    //STEP4: Store New State After update It
    setbookAree(newSatet);
    // axios.patch("/bookAree/"+id).then()
  };

  return (
    <div className="books">
      {bookAree.map((ele, i) => {
        return (
          <div>
            {ele.name}
            <img className="imgSize" src={ele.img} />
            <button
              onClick={() => {
                play(i);
              }}
            >
              play 1
            </button>

            {/* <button onClick={()=>{play1()}}>play 1</button>
      <button onClick={()=>{play2()}}>play 2</button>
      <button onClick={()=>{play3()}}>play 3</button> */}

            <i
              style={ele.liked ? likedstyle : likedstyle2}
              
              onClick={() => toogleLike(ele.id)}
            >
              &hearts;
            </i>
          </div>
        );
      })}
    </div>
  );
}
