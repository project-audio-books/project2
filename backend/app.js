const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

bookAree=[
{
    id: 1,
    name: "لاتقلق",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKinQqiBvSAjAeD6YTFLxdW1sRrQd-bRAsSg&usqp=CAU",
    liked:false

  },
  {
    id: 2,
    name: "دع الخوف  ",
    img: "https://2u.pw/K8dWo",
    liked:false

  },
  {
    id: 3,
    name:"ابدا",
    img: "https://2u.pw/LDgQT",
    liked:false

  },
  {
    id: 4,
    name:  "لاتنطفىء ",
    img: "data:image/jpeg;base64,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",
    liked:false

  },
  {
    id: 5,
    name: "لثقة بالنفس",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUI10q2yRssZyJ4Wd25i8-GsK0BWq_HsIMw&usqp=CAU",
    liked:false

  },
  {
    id: 6,
    name: "بعيدا عن الفوضويه",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrf5ZGuB9xpsH2IvQkcnRDABqOGZnkNsVF4w&usqp=CAU",
    liked:false

  },
  {
    id: 7,
    name: "book7",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUaAVMbGFlYof8OAp_688PTzE68p7hLXqAQ&usqp=CAU",
    liked:false

  },
]
app.get("/bookAree", (req, res) => {
  res.status(200);
  res.json(bookAree);
});
app.patch("/bookeAreee/:id", (req, res)=>{
  let id  = req.paramas.id;
  
})
const port = 5000;
app.listen(port, () => {
  console.log("server is running");
});