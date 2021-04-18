module.exports = [
  {
    name: "Santiago Barrera",
    exec_mode: "cluster",
    instances: "max", // Or a number of instances
    script: "./node_modules/nuxt/bin/nuxt.js",
    args: "start",
    log_file: "records.log"
  }
];
