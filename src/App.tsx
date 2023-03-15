import ClothingSlide from './components/ClothingSlide';

function App() {
  return (
    <div className="flex flex-col overflow-hidden md:flex-row lg:flex-row">
      <ClothingSlide title="Men" />
      <ClothingSlide title="Women" />
      <ClothingSlide title="Kids" />
    </div>
  );
}

export default App;
