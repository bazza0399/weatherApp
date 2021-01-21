const request = require('request')

const getWeather=(location,callback)=>{
    const url = `http://api.weatherapi.com/v1/forecast.json?key=d01e315047cc41868ff191838202910&q=${location}&days=1`
    const place = location
    request({url:url, json : true},(error,response)=>{
        if(error){
            callback('unable to connect to api',undefined)
        }else{
            const data = {
                location : place,
                temperature : response.body.current.temp_c,
                windSpeed : response.body.current.wind_kph,
                condition : response.body.current.condition.text
            }
            callback(undefined,data)
        }
    } )

}
module.exports = getWeather 