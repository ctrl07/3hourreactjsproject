import Button from "../UI/Button";

const ItemList = (props) => {
  const deleteItem = (id) => {
    localStorage.removeItem(id);
    props.onDeleteProduct(id);
  };

  return (
    <>
      <h1>Products</h1>
      <ul>
        <h2>Electronic</h2>
        {props.items.map((product) => {
          if (product.category === "Electronics") {
            return (
              <li key={product.id}>
                {product.price} - {product.category} - {product.name}
                {"  "}
                <Button type="button" onClick={() => deleteItem(product.id)}>
                  Delete Item
                </Button>
              </li>
            );
          }
        })}
      </ul>
      <ul>
        <h2>Food</h2>
        {props.items.map((product) => {
          if (product.category === "Food") {
            return (
              <li key={product.id}>
                {product.price} - {product.category} - {product.name}
                {"  "}
                <Button type="button" onClick={() => deleteItem(product.id)}>
                  Delete Item
                </Button>
              </li>
            );
          }
        })}
      </ul>
      <ul>
        <h2>Skincare</h2>
        {props.items.map((product) => {
          if (product.category === "Skincare") {
            return (
              <li key={product.id}>
                {product.price} - {product.category} - {product.name}
                {"  "}
                <Button type="button" onClick={() => deleteItem(product.id)}>
                  Delete item
                </Button>
              </li>
            );
          }
        })}
      </ul>
      <ul>
        <h2>Clothing</h2>
        {props.items.map((product) => {
          if (product.category === "Clothes") {
            return (
              <li key={product.id}>
                {product.price} - {product.category} - {product.name}
                {"  "}
                <Button type="button" onClick={() => deleteItem(product.id)}>
                  Delete Item
                </Button>
              </li>
            );
          }
        })}
      </ul>
      <ul>
        <h2>Footwear</h2>
        {props.items.map((product) => {
          if (product.category === "Footwear") {
            return (
              <li key={product.id}>
                {product.price} - {product.category} - {product.name}
                {"  "}
                <Button type="button" onClick={() => deleteItem(product.id)}>
                  Delete Item
                </Button>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};
export default ItemList;
