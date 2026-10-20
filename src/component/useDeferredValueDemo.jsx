import { useState, useDeferredValue } from "react";

function App() {
  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search);

  const products = [
    "Shirt",
    "Shoes",
    "Jeans",
    "Jacket"
  ];

  const filteredProducts = products.filter(product =>
    product.toLowerCase().includes(
      deferredSearch.toLowerCase()
    )
  );

  return (
    <div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search products"
      />

      {filteredProducts.map(product => (
        <p key={product}>{product}</p>
      ))}
    </div>
  );
}

export default App;

// useDeferredValue() is a React Hook that lets a part of the UI use a temporarily older value while React works on 
//rendering the latest value. It is useful when typing into an input should remain responsive while a large 
//result list updates. Unlike debouncing, it does not wait for a fixed time interval.

// Line-by-line explanation:
// 1. search stores the latest input value.
// 2. useDeferredValue(search) creates a deferred version of that value.
// 3. The product array contains the available products.
// 4. filter() searches using deferredSearch instead of the immediate input value.
// 5. When the user types, the input updates immediately.
// 6. React can defer rendering the filtered results when that work is expensive.
// Real-world use: Searching and filtering large product listing pages.