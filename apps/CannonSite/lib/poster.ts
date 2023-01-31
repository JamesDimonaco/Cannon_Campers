import axios from 'axios';


const poster = async (urlPrams, data) => {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
    const url = process.env.NEXT_PUBLIC_STRAPI_URL;
    try {
        const res = await axios.post(`${url}/${urlPrams}`, {"data" : data}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        // send ok back to the caller
        

        
        
        return res;
        
    } catch (error) {
        console.log(error, 'error');
        
        
    }



}



    
    
    export default poster;

