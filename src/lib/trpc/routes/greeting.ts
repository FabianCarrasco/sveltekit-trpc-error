import {t} from '$lib/trpc/router'
import delay from 'delay'

export const greetingRouter = t.router({
    greeting: t.procedure.query(async () => {
        await delay(500)
        return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`
    })
})

export type Router = typeof greetingRouter