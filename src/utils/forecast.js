const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=14cfbf2c0d5e0c7f3053b8850799abd3&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather services!',undefined)
        }
        else if(body.error){
            callback('Unable to find location.Try another search.',undefined)
        }
        else{
            callback(undefined,body.current.weather_descriptions+'.It is currently ' +body.current.temperature+' degrees out.There is a '+
        body.current.precip+'% chance of rain.')
        }
    })
}

module.exports= forecast