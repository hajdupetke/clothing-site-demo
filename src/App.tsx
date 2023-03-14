import ClothingSlide from './components/ClothingSlide';

function App() {
  return (
    <div className="flex overflow-hidden">
      <ClothingSlide title="Male" background="bg-male">
        <ul>
          <li>Coats</li>
          <li>T-shirts</li>
        </ul>
      </ClothingSlide>
      <ClothingSlide title="Female" background="bg-female">
        <ul>
          <li>Coats</li>
          <li>T-shirts</li>
        </ul>
      </ClothingSlide>
      <ClothingSlide title="Kids" background="bg-kid">
        <ul>
          <li>Coats</li>
          <li>T-shirts</li>
        </ul>
      </ClothingSlide>
    </div>
  );
}

export default App;
