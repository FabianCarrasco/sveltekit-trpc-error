import { initTRPC } from "@trpc/server";
import { greetingRouter } from "./routes/greeting";
import delay from "delay";

export const t = initTRPC.create()

export const router = t.router({
    greeting: greetingRouter.greeting
})

export type Router = typeof router