import axios from 'axios';


const fetcher = async (url: string, endpoints: string[], token: string) => {
let data = [];
const dataPromise = new Promise ((resolve, reject) => {
endpoints.forEach(async (des, i) => {
  const res = await axios.get(`${url}/${des}?populate=*`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
});


data.push([des, res.data]);
if (endpoints.length === data.length ) {
    resolve(data);
}})

});



return await dataPromise;

}

export default fetcher;