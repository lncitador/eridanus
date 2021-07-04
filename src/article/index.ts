/* eslint-disable @typescript-eslint/no-explicit-any */
import grpc from "grpc";
import "@database";

import { loadProto } from "@loadproto";

import { implementation } from "./implementations";

export const startServer = (): void => {
  const proto = loadProto();
  const server = new grpc.Server();
  server.addService((proto.ArticleService as any).service, implementation);

  server.bind(`127.0.0.1:50051`, grpc.ServerCredentials.createInsecure());
  server.start();
};
