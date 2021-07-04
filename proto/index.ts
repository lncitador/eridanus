/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import grpc from "grpc";
import path from "path";

import * as protoLoader from "@grpc/proto-loader";

export function loadProto() {
  const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, "pb", `article.proto`),
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    }
  );
  const proto = grpc.loadPackageDefinition(packageDefinition);

  return proto;
}
