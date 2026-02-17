/* ==================================================
   config.js
   - Central app configuration: `BASE_URL` for Google Sheets and
     `SHEETS` mapping used across pages.
   ================================================== */

const BASE_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmRjmVRvtzH7GpZo3y1kBrFS8Cl8EGjoBifVBPSzSFPfwizKNqXaW5PSTsK9t31bWydFoLAVkSVMyi/pub?output=csv&gid=";

const SHEETS = {
  hollywood: { name: "Hollywood", gid: "0", thumbnail: "https://i.cdn.newsbytesapp.com/images/l70420220408162006.jpeg" },
  bollywood: { name: "Bollywood", gid: "709264029", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2fmK1VUI7NVq_47_cl8bBovZ8Lg8LXlAYQ&s" },
  tollywood: { name: "Tollywood", gid: "1128818627", thumbnail: "https://www.newsbharati.com/Encyc/2022/8/25/South-Indian-films_1806ffc02e4_large_202208251904110849_H@@IGHT_400_W@@IDTH_750.jpg" },
  other_lang: { name: "Other Language", gid: "891613117", thumbnail: "https://i0.wp.com/avidbards.com/wp-content/uploads/2020/11/Non-EnglishShows.png?fit=1440%2C810&ssl=1" },
  marathi: { name: "Marathi", gid: "120892353", thumbnail: "https://staticprintenglish.theprint.in/wp-content/uploads/2024/07/marathi_movie_industry_elitism.jpg" },
  fav_movie: { name: "Favourite Movies", gid: "894280801", thumbnail: "https://contentful.harrypotter.com/usf1vwtuqyxm/4Lx4yGQ3W0daVknu7ayizS/d386272ff997df7578c175fb8b912ef8/HP-F1-philosophers-stone-harry-ron-hermione-hogwarts-express-web-landscape?q=75&fm=jpg&w=2560" },
  watchlist: { name: "Watchlist", gid: "549028903", thumbnail: "https://www.slashfilm.com/img/gallery/12-strongest-avengers-in-the-mcu-ranked/intro-1746204078.jpg" },
  web_series: { name: "Web Series", gid: "1808896095", thumbnail: "https://images.saymedia-content.com/.image/t_share/MjA2NDEzODM1MDAxNjY4OTQ4/22-greatest-premium-channel-tv-series.jpg" }
};
