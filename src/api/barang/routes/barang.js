module.exports = {
  routes: [
    {
      method: "GET",
      path: "/barang",
      handler: "barang.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
