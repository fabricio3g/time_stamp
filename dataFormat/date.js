module.exports = date = (req , res )=>{

    if(Number(req.params.date)){

        const unixTimeStamp = Number(req.params.date)
    
        let milliseconds = unixTimeStamp * 1000
        let dateTime = new Date(milliseconds)
    
        let humaDateFormate = dateTime.toUTCString()
    
        res.send({
            unix: unixTimeStamp,
            utc: humaDateFormate
        })
        return
    }
    
    else if(String(req.params.date)){
        
     
            
            const dateUnix = new Date(req.params.date) / 1000
            const utc = new Date(dateUnix * 1000).toUTCString()
            if(utc === 'Invalid Date'){
                res.send({ error : "Invalid Date" })
            } else
                res.send({
                    unix: dateUnix,
                    utc: utc
                })
            
           
      
    }
    
}