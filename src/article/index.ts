/* eslint-disable @typescript-eslint/no-explicit-any */
import grpc from "grpc";

import "@database";
import { loadProto } from "@loadproto";

import { implementation } from "./implementations";

export const startServer = (port: number): void => {
  const proto = loadProto("article");
  const server = new grpc.Server();
  server.addService((proto.UserService as any).service, implementation);

  server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
  server.start();
};
