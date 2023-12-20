import { RequestEvent } from "@builder.io/qwik-city";
import redis from "~/server/cache";

// create api by using folder routes and onGet, onPost, etc with index.ts for example

export const onGet = async (req: RequestEvent) => {
  // can grab env from req.env or process.env
  console.log("redis: onGet", req.url.href, req.env.get("REDIS_PORT"));
  await redis.set("my-cache-key", new Date().toISOString());
  console.log("redis: set my-cache-key", await redis.get("my-cache-key"));
  const query = req.query;
  const params = req.params;
  if (params.key) {
    console.log("redis: key", params.key);
    const value = await redis.get(params.key);
    console.log("redis: value", params.key, value);
    return req.json(200, {
      data: {
        url: req.pathname,
        query,
        params,
        value,
      },
    });
  }
  return req.json(200, {
    data: {
      url: req.pathname,
      query,
      params,
    },
  });
};

export const onPost = async (req: RequestEvent) => {
  const query = req.query;
  const params = req.params;
  return req.json(200, {
    data: {
      url: req.pathname,
      query,
      params,
    },
  });
};
