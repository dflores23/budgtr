const express = require(`express`);
const app = express();
const budgets = require("./models/budget");
const methodOverride = require(`method-override`);

app.use(express.urlencoded({extended: false}));
app.use(express.static(`public`));
app.use(methodOverride(`_method`))




//index
app.get("/budget/", (req, res) => {
    res.render("index.ejs", { allBudgets: budgets, title: "Budgets - Index Page" });
  });
//new
  app.get("/budget/new", (req, res) => {
    res.render("new.ejs", {title: "Budget - New Page"});
  });

//create
  app.post(`/budget`, (req,res)=> {
    req.body.tags = req.body.tags.split(`,`);
    for(tag of req.body.tags){
      console.log(tag[0])
      if(tag[0]=== ` `){
        console.log(`space found`)
        tag = tag.substring(1);
        console.log(tag)
      }
    }
  })
 
  //show
  app.get("/budget/:indexOfBudgetsArray", (req, res) => {
    res.render("show.ejs", { budget: budgets[req.params.indexOfBudgetsArray], title: "First - Show Page" });
  });




app.listen(3000, () => {
console.log("listing")
})
