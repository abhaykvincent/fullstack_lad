const functions = require('firebase-functions')
const express = require('express');
const cors = require('cors');
const app = express();

const { db } = require('./util/admin');


const walmart = require('./walmart')

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Routes
app.get('/scraping/getProductsByLink',(req,res) => {        
  walmart.getProductByLink()
    .then(  products => {

      if(products){
        products.forEach(product=> {
          db.doc(`/products-grocery-test/${product.id}`)
          .get()
          .then((doc) => {
              if (doc.exists) {
                    console.log(`doc is already Scraped`)
              } 
              else {

                return db.collection("products-grocery-test").doc(product.id).set({...product})
                  .then(function() {
                      console.log(`${product.name} is now on Easy Groceries`);
                  })
                  .catch(function(error) {
                      console.error("Error writing document: ", error);
                  });
              }
          })
          .catch((err) => {
              console.error(err);
              if (err.code === "auth/email-already-in-use") {
                  return res.status(400).json({ email: "Email is already is use" });
              } else {
                  return res
                  .status(500)
                  .json({ general: "Something went wrong, please try again" });
              }
          });
        })
      }
      res.json({
        products
    })
  })
})
app.get('/scraping/getCategories',(req,res) => {        
  walmart.scrapeCategories()
    .then(  categories => {
      res.json({
        categories
    })
  })
})
app.get('/scraping/scrapeSingleCategories',(req,res) => {        
  walmart.scrapeSingleCategories()
    .then(  pages => {
      res.json({
        pages
    })
  })
})


app.get('/easy/getProductsByCategory/:category',(req,res) => {   
  let categoryName;
  categories=[
    {
        "name": "Fruits & Vegetables",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Fruits-Vegetables_20190425_E.jpg\")",
        "id": "N-3799"
    },
    {
        "name": "Dairy & Eggs",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Dairy-Eggs_20190425_E.jpg\")",
        "id": "N-3798"
    },
    {
        "name": "Meat, Seafood & Alternatives",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Meat-Seafood_20190425_E.jpg\")",
        "id": "N-3793"
    },
    {
        "name": "Pantry Food",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week40/CT_WMS_OG-Pantry_20201029_E.jpg\")",
        "id": "N-3794"
    },
    {
        "name": "Bakery",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Bakery_20190425_E.jpg\")",
        "id": "N-3796"
    },
    {
        "name": "Frozen Food",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Frozen-Food_20190425_E.jpg\")",
        "id": "N-3795"
    },
    {
        "name": "Drinks",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Drinks_20190425_E.jpg\")",
        "id": "N-3791"
    },
    {
        "name": "International Foods",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-International-Foods_20190425_E.jpg\")",
        "id": "N-4356"
    },
    {
        "name": "Deli & Fresh Prepared Meals",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week31/CT_WMS_OG-Deli-Fresh-Meals_20200827_E.jpg\")",
        "id": "N-3792"
    },
    {
        "name": "Natural & Organic",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Natural-Organic_20190425_E.jpg\")",
        "id": "N-3992"
    },
    {
        "name": "Chips And Snacks",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Snacks-Candy_20190425_E.jpg\")",
        "id": "N-3842"
    },
    {
        "name": "Pasta, Rice & Beans",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Pasta-Beans-Rice_20190425_E.jpg\")",
        "id": "pasta-rice-beans"
    },
    {
        "name": "Household & Cleaning Supplies",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Household-Supplies_20190425_E.jpg\")",
        "id": "N-3803"
    },
    {
        "name": "Personal Care",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week24/CT-L1/CT_WMS_OG-Personal-Care_20200709_E.jpg\")",
        "id": "N-4287"
    },
    {
        "name": "Health",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week24/CT-L1/CT_WMS_OG-Health_20200709_E.jpg\")",
        "id": "N-3800"
    },
    {
        "name": "Beauty",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week24/CT-L1/CT_WMS_OG-Beauty_20200709_E.jpg\")",
        "id": "N-9570"
    },
    {
        "name": "Pets",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT_WMS_OG-Pet-Essentials_20190425_E.jpg\")",
        "id": "N-3797"
    },
    {
        "name": "Baby",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Baby-Essentials_20190425_E.jpg\")",
        "id": "N-3789"
    },
    {
        "name": "Home, Kitchen & Outdoor",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week21/L1-CT/CT_WMS_OG-Home-Kitchen-Outdoor_20200618_E.jpg\")",
        "id": "N-8584"
    },
    {
        "name": "Electronics & Entertainment",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week21/L1-CT/CT_WMS_OG-Electronics-Entertainment_20200618_E.jpg\")",
        "id": "N-9438"
    },
    {
        "name": "Toys & Sports",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week21/L1-CT/CT_WMS_OG-Toys-Sports_20200618_E.jpg\")",
        "id": "N-8607"
    },
    {
        "name": "Crafts & Office Supplies",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week21/L2-CT-Home-Kitchen-Outdoor/CT_WMS_OG-Home-Crafts-Office_20200618_E.jpg\")",
        "id": "crafts-office-supplies"
    },
    {
        "name": "Household Appliances",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week21/L2-CT-Home-Kitchen-Outdoor/CT_WMS_OG-Home-Appliances_20200618_E.jpg\")",
        "id": "household-appliances"
    },
    {
        "name": "Ice Cream & Treats",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week21/L1-CT/CT_WMS_OG-Ice-Cream-Treats_FoodX_20200618_E.jpg\")",
        "id": "ice-cream-treats"
    }
  ]     
  categories.forEach(category=>{
    if(category.id === req.params.category){
      categoryName=category.name
      console.log(categoryName)
      return
    }
  })
  db.collection("products-grocery")
  .where('category', '==', ` ${categoryName}`)
  .limit(12)
    .get()
    .then(function(querySnapshot) {
      let products=[];
        querySnapshot.forEach(function(product) {
          products.push(product.data())
        });
        return products
    })
    .then(products=>{

      res.json(products)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

})

app.get('/easy/search',(req,res) => {
    db.collection("products-grocery")
    .where('fieldName', '>=', 'tomato')
    .limit(12)
      .get()
      .then(function(querySnapshot) {
        let products=[];
          querySnapshot.forEach(function(product) {
            products.push(product.data())
          });
          return products
      })
      .then(products=>{
  
        res.json(products)
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
  
  })
  
  
  const runtimeOpts = {
    timeoutSeconds: 300,
    memory: '1GB'
  }