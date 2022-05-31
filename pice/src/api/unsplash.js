import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID fRNxaiLO78Zo1U_-p1hLsH1VZtSjuH-bh2sYRZbxkgQ'
    }
});