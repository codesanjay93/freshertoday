export const BLOG_COLLECTION = "BLOGS-COLLECTION"
export const PROD_API = "https://www.freshertoday.in/api"
export const DEV_API = "http://localhost:9393/api"


export const API = process.env.NODE_ENV === 'development' ? DEV_API : PROD_API
