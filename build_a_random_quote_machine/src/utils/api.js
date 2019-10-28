import Axios from 'axios';

export function getQuote() {
    return Axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=100`)
        .then(res => {
            return res.data;
        });
        
};