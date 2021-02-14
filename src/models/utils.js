import Criptomoneda from '../models/criptomoneda'

// Encuentra el max ID de la colección y lo incrementa en uno.
const getNewId = async () => {
  const document = await Criptomoneda.findOne({}).sort([['id', -1]])
  return document.id ? document.id + 1 : 1
}

export default getNewId
