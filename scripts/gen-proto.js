const { join } = require("path");
const telescope = require("@osmonauts/telescope").default;

const protoDirs = [join(__dirname, "/../proto")];
const outPath = join(__dirname, "../supernovajs");

telescope({
  protoDirs,
  outPath,
  options: {
    includePackageVar: false,
    typingsFormat: {
      useExact: false,
      timestamp: "timestamp",
      duration: "duration",
    },
    aminoEncoding: {
      enabled: true,
    },
    lcdClients: {
      enabled: true,
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
    },
  },
});
