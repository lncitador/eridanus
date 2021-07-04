import { GrpcObject, loadPackageDefinition } from "grpc";
import path from "path";

import * as protoLoader from "@grpc/proto-loader";

export function loadProto(fileName: string): GrpcObject {
  const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, "pb", `${fileName}.proto`),
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    }
  );
  const proto = loadPackageDefinition(packageDefinition);

  return proto;
}
