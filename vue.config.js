module.exports = {
  pwa: {
    name: "todo-mastery",
  },
  publicPath: process.env.NODE_ENV === "production" ? "/todo-pwa-app/" : "/",
};
