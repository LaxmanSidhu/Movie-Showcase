/* ==================================================
   config.js
   - Central app configuration: `BASE_URL` for Google Sheets and
     `SHEETS` mapping used across pages.
   ================================================== */

const BASE_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmRjmVRvtzH7GpZo3y1kBrFS8Cl8EGjoBifVBPSzSFPfwizKNqXaW5PSTsK9t31bWydFoLAVkSVMyi/pub?output=csv&gid=";

const SHEETS = {
  hollywood: { name: "Hollywood", gid: "0", thumbnail: "https://i.cdn.newsbytesapp.com/images/l70420220408162006.jpeg" },
  bollywood: { name: "Bollywood", gid: "709264029", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hobRSSZ_MmdDjoSuxTeb3Il_QZWGyEfYpg&s" },
  tollywood: { name: "Tollywood", gid: "1128818627", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9sIm89ahznnWN6sUMdSvYpgX8yKb2X4tcg&s" },
  korean: { name: "Korean", gid: "891613117", thumbnail: "https://cdn.kbizoom.com/media/2025/05/11083027/attophimxhmqn073dme31-1746876333551-1746876333725314482825webp-1105258.webp" },
  marathi: { name: "Marathi", gid: "120892353", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3j3Jcjuglhwy1bu_rXYgi7ySTDLkRnr6cA&s" },
  fav_movie: { name: "Favourite Movies", gid: "894280801", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCIxHxGeiySeRFasi70I-4Ja0l_gTFeuJwA&s" },
  watchlist: { name: "Watchlist", gid: "549028903", thumbnail: "https://static.toiimg.com/thumb/msid-125803323,imgsize-26552,width-400,resizemode-4/dhurandhar-ending-explained.jpg" },
  web_series: { name: "Web Series", gid: "1808896095", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9sIm89ahznnWN6sUMdSvYpgX8yKb2X4tcg&s" }
};
