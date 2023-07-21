const development = {
  url: "http://localhost:4000",
};

const production = {
  url: "https://budgettracker-sc5q.onrender.com",
};

export const config =
  process.env.NODE_ENV === "development" ? development : production;
