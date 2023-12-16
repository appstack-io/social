import {
  combineProtos,
  generateInterfaces,
  generateServiceProtos,
} from '@appstack-io/proto';
import { exec } from 'child_process';
import * as fs from 'fs';

combineProtos([`${__dirname}/src`], `${__dirname}/src/combined.proto`);
exec(
  `protoc --plugin=$(pwd)/node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=snakeToCamel=true,outputClientImpl=false -I=./src --ts_proto_out=./src combined.proto`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    generateInterfaces(
      `${__dirname}/src/combined.ts`,
      `${__dirname}/src/combined.interfaces.ts`,
    );
    exec(
      `node_modules/.bin/grpc_tools_node_protoc --plugin=protoc-gen-ts_proto=node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false --proto_path=. src/combined.proto && mv ./src/src/combined.ts ./src/tests/combined.client.ts && rm -rf ./src/src`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Execution error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Error: ${stderr}`);
          return;
        }
      },
    );
    exec(
      `node_modules/.bin/grpc_tools_node_protoc --plugin=protoc-gen-ts_proto=node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/follow/tests/components --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false --proto_path=. src/follow/tests/components/main.microservices.module.ts.proto && mv ./src/follow/tests/components/src/follow/tests/components/main.microservices.module.ts.ts ./src/follow/tests/components/main.microservices.module.client.ts && rm -rf ./src/follow/tests/components/src`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Execution error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Error: ${stderr}`);
          return;
        }
        (() => {
          const data = fs.readFileSync(
            `${__dirname}/src/follow/tests/components/main.microservices.module.client.ts`,
            'utf-8',
          );
          const fixed = data.replace(
            '../../../../google/protobuf/empty',
            './google/protobuf/empty',
          );
          fs.writeFileSync(
            `${__dirname}/src/follow/tests/components/main.microservices.module.client.ts`,
            fixed,
            'utf-8',
          );
        })();
      },
    );
  },
);
generateServiceProtos(`${__dirname}/src/follow/tests/components`);
