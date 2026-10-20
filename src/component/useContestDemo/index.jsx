import { useTheme } from './ThemeContext';

function Header() {
  const { color, changeColor } = useTheme();

  return (
    <header style={{ backgroundColor: color, padding: '20px' }}>
      <h2>My React Application</h2>
      <button onClick={changeColor}>Change Color</button>
    </header>
  );
}

function Home() {
  const { color } = useTheme();

  return (
    <main
      style={{
        backgroundColor: color,
        minHeight: '100vh',
        padding: '20px',
      }}
    ></main>
  );
}

const UseContestDemo = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};
export default UseContestDemo;
