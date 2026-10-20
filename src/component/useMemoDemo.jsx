import { memo, useMemo, useState } from 'react';

function App() {
  const [number, setNumber] = useState(10);
  const [theme, setTheme] = useState(false);

  const sum = useMemo(() => {
    console.log('Calculating sum...');

    let result = 0;

    for (let i = 1; i <= number * 1; i++) {
      result += i;
      console.log(result);
    }

    return result;
  }, [number]);

  return (
    <div>
      <h2>Sum: {sum}</h2>

      <button onClick={() => setNumber((n) => n + 1)}>Increase Number</button>

      <button onClick={() => setTheme((t) => !t)}>Toggle Theme</button>

      <p>Theme: {theme ? 'Dark' : 'Light'}</p>
    </div>
  );
}

const products = [
  { id: 1, name: 'Shirt', price: 25 },
  { id: 2, name: 'Shoes', price: 80 },
  { id: 3, name: 'Jeans', price: 50 },
  { id: 4, name: 'Jacket', price: 100 },
];

function ProductList() {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);

  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');

    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products"
      />

      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>

      {filteredProducts.map((product) => (
        <p key={product.id}>
          {product.name} - ${product.price}
        </p>
      ))}
    </div>
  );
}

const UserDetails = memo(function UserDetails({ user }) {
  console.log('UserDetails rendered');

  return (
    <p>
      {user.name} - {user.role}
    </p>
  );
});

function App3() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Saravanan');

  const user = useMemo(() => {
    return {
      name: name,
      role: 'Frontend Developer',
    };
  }, [name]);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>

      <button onClick={() => setName('Dev')}>Change User</button>

      <UserDetails user={user} />
    </div>
  );
}
const UseMemoDemo = () => {
  return (
    <>
      <App />
      <hr />
      <ProductList />
      <hr />
      <App3 />
    </>
  );
};
export default UseMemoDemo;
