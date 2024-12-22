const axios = require('axios');
const {convertSchema} = require("../validations/exchange.validtions.js");

const getCurrencies = (req,res)=>{
   
    async function callApi(){
        try{
                const url = "https://open.er-api.com/v6/latest";
                const apiResponse = await axios.get(url);
                const {rates} = apiResponse.data;
                res.status(200).send(Object.keys(rates));
            
        }catch(err){
            res.sendStatus(
                500,
                {
                    "message" : "The service is currently down, please check again later"
                }
            );
        }
    }
    callApi()
};

const convertCurrencies = (req,res)=>{
    const value = req.query.value;
    const currency = req.query.currency;
    const to_currency = req.query.to_currency;
    const {error} = convertSchema.validate({value,currency,to_currency});

    async function callApi(){
        try{
                const url = `https://open.er-api.com/v6/latest/${currency}`;
                const apiResponse = await axios.get(url);

                if(apiResponse.data.result === "error"){
                    res.status(404).send({"message" : "Cannot find given currency code"});
                }else{
                    const {rates} = apiResponse.data;
                    const targetRate = rates[to_currency];
                    const convertedValue = Number(value) * Number(targetRate); 
                    res.status(200).send(""+convertedValue);
                }
                    
        }catch(err){
            res.sendStatus(
                500,
                {
                    "message" : "The service is currently down, please check again later"
                }
            );
        }
        
    }

    if(error){
        res.status(400).send({message : "Incomplete or Incorrect data passed"});
    }else{
        callApi()
    }; 
};

module.exports = {getCurrencies,convertCurrencies};