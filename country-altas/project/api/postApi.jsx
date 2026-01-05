import axios from 'axios';

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1"
})
// base section: ekhane main url thakbe 


export const getcountrydata = ()=>{
    return api.get("/all?fields=name,population,region,capital,flags")
}
// ekhane querry thakbe

export const getindvcountrydata = (name)=>{
    return api.get(`/name/${name}?fulltext=true&fields=name,population,region,subregion,languages,borders,currencies,capital,flags`)
}
// ekhane querry thakbe