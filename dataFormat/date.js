module.exports = date = (req , res )=>{

  

  if(Number(req.params.date)){

        const unixTimeStamp = Number(req.params.date)
    
        
        let dateTime = new Date(unixTimeStamp)
    
        let humaDateFormate = dateTime.toUTCString()
    
        res.json({
            unix: unixTimeStamp,
            utc: humaDateFormate
        })
        return
    }
  
  if(typeof req.params.date === 'undefined'){
                  res.json(
                    {
                      unix: Math.round(new Date().getTime()),
                      utc: new Date().toUTCString()
                    }
                  )
                  return
            }
    
   else if(String(req.params.date)){


            const dateUnix = new Date(req.params.date)
            const utc = new Date(dateUnix).toUTCString()
           

            if(utc === 'Invalid Date') res.send({ error : "Invalid Date" })
         
            else
            
                res.json({
                    unix: dateUnix.getTime(),
                    utc: utc
                })
           
           
      
    }
    
}