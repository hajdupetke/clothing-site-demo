import ClothingSlide from './components/ClothingSlide';

function App() {
  return (
    <div className="flex flex-col overflow-hidden md:flex-row lg:flex-row">
      <ClothingSlide title="Male" background="bg-male" />
      <ClothingSlide title="Female" background="bg-female" />
      <ClothingSlide title="Kids" background="bg-kid" />
    </div>
  );
}

export default App;
