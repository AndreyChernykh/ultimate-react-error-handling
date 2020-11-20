import { setupWorker, rest } from "msw";

const handlers = [
  rest.get(`/user/201`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({}), ctx.delay(1000));
  }),
  rest.get(`/user/422`, (req, res, ctx) => {
    return res(ctx.status(422), ctx.json({}), ctx.delay(1000));
  }),
  rest.get(`/user/404`, (req, res, ctx) => {
    return res(ctx.status(404), ctx.delay(1000));
  }),
];

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
