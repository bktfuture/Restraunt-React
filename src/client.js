import data from "./datafile";
// https://659885f9b213d3bd7fe32ae7.mockapi.io/api/v1/menu

function getProducts() {
  return data;
}

function formatAmount(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
}

export { getProducts, formatAmount };
