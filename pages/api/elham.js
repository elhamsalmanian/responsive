// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {
    
    if (req.method === 'POST') {                
        return res.status(200).json({});
    } 
    else if (req.method === 'GET') {
                   
        let students = await axios.get(`` )
        .then( res => {   
            const data = res.data;
            return ([...data]) 
        })       
        .catch( (error) => {            
            console.log(error);
            return ([])   
        }); 
        
        return res.status(200).json();
    }
    
   
    
}
