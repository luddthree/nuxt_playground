export default defineEventHandler(async(event) => {



    const { name } = getQuery(event)

    const { age } = await readBody(event)

    return {
        message: `hello, ${name}! you are ${age} years old`
    }
})