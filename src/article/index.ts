/* eslint-disable @typescript-eslint/no-explicit-any */
import "@database";

import * as grpc from "@grpc/grpc-js";

import { loadProto } from "@loadproto";

import { implementation } from "./implementations";

export const startServer = (port: number): void => {
  const proto = loadProto();
  const server = new grpc.Server();
  server.addService((proto.ArticleService as any).service, implementation);

  server.bindAsync(
    `127.0.0.1:${port}`,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.log(`Server running at http://127.0.0.1:${port}`);
      server.start();
    }
  );
};
