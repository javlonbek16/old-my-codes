function priceFormatter(price) {
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function code() {}

export { priceFormatter, code };
