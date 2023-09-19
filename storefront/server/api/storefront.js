export default defineEventHandler(async(event) => {


    //get query
    const { name } = getQuery(event)
    //post data
    const { age } = await readBody(event)


    //example currency api
    // const { data } = await $fetch(`https:api.currencyapi.com/v3/latest?
    // apikey=eJdPICJUDBt6B4e4IX6DZ4A9Xos4Z2JRZ8xh2v2`)



    return {
        message: `hello, ${name}! you are ${age} years old`
    }

    //example currency api
    // return data
})