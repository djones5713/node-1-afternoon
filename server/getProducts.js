const products = require("../server/products.json");


const getProducts =  (req, res, next) => {
 if(req.query.price){
     const items = product.filter(val => val.price  >= parseInt(req.query.price));
    return res.status(200).send(items);
    }
    res.status(200).send(products);
};

module.exports = getProducts;