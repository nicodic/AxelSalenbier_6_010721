export const getAll =  async () => {
     const data = await reader()
     return data
}
export const getPhotographers = async () => {
    const data = await reader()
    return data.photographers
}
export const getMediaByPhotographer = async (id) => {
    const data = await reader()
    const medias = data.media.filter((item) => item.photographerId == id);
    return medias
}
export const getPhotographer = async (id) => {
     const data = await reader()
     const photographe = data.photographers.find((user)=>user.id == id); 
     return photographe
}
/**
 * 
 * @returns {photographers: [], medias: [] }
 */
async function reader() {
     try {
          const response = await fetch('./js/data.json')
          const data = await  response.json()
          return data
     } catch (error) {
          console.log(error)
     }
}