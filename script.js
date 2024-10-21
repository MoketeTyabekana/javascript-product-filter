const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const storeItems = document.getElementById("products-list");
  const product = storeItems.querySelectorAll("product");
  const productName = document.getElementsByTagName("h4");

  for (const i = 0; i < productName; i++) {
    const match = product[i].getElementsByTagName("h4")[0];

    if (match) {
      const textvalue = match.textContent || match.innerHTML

      if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      }
    } else {
      product[i].style.display = "none";
    }
  }
};
