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
app.post("/budget", (req, res) => {
  
  if(req.body.budget === '0'){
    req.body.budget = 0
  } else {
    req.body.budget = true
  }
  
  budget.push(req.body)
  
  res.redirect("/budget/")
});
 
  //show
  app.get("/budget/:indexOfBudgetsArray", (req, res) => {
    res.render("show.ejs", { budget: budgets[req.params.indexOfBudgetsArray], title: "First - Show Page" });
  });




app.listen(3000, () => {
console.log("listing")
})
