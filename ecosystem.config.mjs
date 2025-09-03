export default {
  apps: [
    {
      name: "guardportal",
      script: "dist/index.js",
      interpreter: "node",
      watch: ["dist"],
      ignore_watch: ["node_modules", "logs", ".git", "client"],
      instances: 1,
      autorestart: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: "5000",
        DATABASE_URL: "postgresql://admin:guardportal123@localhost:5432/guardportal",
        EMAIL_USER: "rakeezasattar53@gmail.com",
        EMAIL_PASS: "swrqzfdlsfgtinhi",
        SQUARE_ACCESS_TOKEN: "EAAAl_EA6QxH6Li7Hgh9JFtk_wlZ2TZwpntF-F1xHBwmsJH5a-pjmYx_1cFvYSUQ",
        SQUARE_APPLICATION_ID: "sandbox-sq0idb-wmwGKpr076ccNbqJgzjomQ",
        SQUARE_LOCATION_ID: "LRK1DPQQ4VFYZ",
        SQUARE_ENVIRONMENT: "sandbox",
        DOCUSIGN_ACCOUNT_ID: "6674e2fb-5640-455f-b612-d1709306a160",
        DOCUSIGN_INTEGRATION_KEY: "c7d76157-91d0-43c5-99ef-aa075417af42",
        DOCUSIGN_PRIVATE_KEY: "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEA0JL5Vy4YourActualPrivateKeyHere...\n-----END RSA PRIVATE KEY-----"
      },
      env_production: {
        NODE_ENV: "production",
        PORT: "5000",
        DATABASE_URL: "postgresql://admin:guardportal123@localhost:5432/guardportal",
        EMAIL_USER: "rakeezasattar53@gmail.com",
        EMAIL_PASS: "swrqzfdlsfgtinhi",
        SQUARE_ACCESS_TOKEN: "EAAAl_EA6QxH6Li7Hgh9JFtk_wlZ2TZwpntF-F1xHBwmsJH5a-pjmYx_1cFvYSUQ",
        SQUARE_APPLICATION_ID: "sandbox-sq0idb-wmwGKpr076ccNbqJgzjomQ",
        SQUARE_LOCATION_ID: "LRK1DPQQ4VFYZ",
        SQUARE_ENVIRONMENT: "sandbox",
        DOCUSIGN_ACCOUNT_ID: "6674e2fb-5640-455f-b612-d1709306a160",
        DOCUSIGN_INTEGRATION_KEY: "c7d76157-91d0-43c5-99ef-aa075417af42",
        DOCUSIGN_PRIVATE_KEY: "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEA0JL5Vy4...\n-----END RSA PRIVATE KEY-----"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      log_file: "./logs/pm2-combined.log",
      time: true
    }
  ]
};