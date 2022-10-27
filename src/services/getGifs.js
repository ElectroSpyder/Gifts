 const apiKey = 'c6xJnA0GkF3l1meIZoIeXq9Jjuj61ztl'
 

 export default function getGifts({keyword='universo'}={}){
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
 
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response =>{
            const {data= []} = response
            if(Array.isArray(data)){
                const gify = data.map(image =>{
                    const {images, title, id} = image
                    const {url} = images.downsized_medium
                
                return {title, id, url}
            
            })
            return gify
        }
    })
 }