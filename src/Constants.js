const development = {
  url: "http://localhost:4000",
};

const production = {
  url: "https://budgettracker-thup.onrender.com",
};

export const config =
  process.env.NODE_ENV === "development" ? development : production;
