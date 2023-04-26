const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://api.codyvisions.com'

export const getImageUrls = () => fetch(`${url}/images`);