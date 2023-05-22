import axios from 'axios'

export default defineEventHandler(async (event) => {
  try {
    const response = await axios.get('https://dummyjson.com/posts')
    const data = response ? response?.data?.posts : []
    return data
  } catch (error) {
    console.log('error in fetching posts')
  }
})
