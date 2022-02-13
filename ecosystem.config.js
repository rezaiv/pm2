module.exports = {
  apps: [
    {
      name: "pm2",
      script: "app.js",
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: "190.2.148.119",
      path: "/root/pm2",
      repo: "git@github.com:Reza-SadriNia/pm2.git",
      ref: "origin/main",
      key: "/home/reza/.ssh/id_rsa.pub",
      "post-deploy": "npm i; pm2 reload ecosystem.config.js --env production",
    },
  },
};
