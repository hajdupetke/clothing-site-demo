import ClothingMenu from './ClothingMenu';

interface ClothingProps {
  title: string;
  background: string;
}

function ClothingSlide({ title, background }: ClothingProps) {
  return (
    <div className="group relative h-screen w-full bg-black text-white lg:w-1/3">
      <div
        className={`relative ${background} top-[0px] h-full w-full max-w-full bg-stone-600 bg-cover bg-center bg-blend-overlay duration-300 group-hover:top-[-50vh] group-hover:ease-in-out`}
      />
      <div className="absolute bottom-[-50vh] flex h-[50vh] w-full flex-col items-center justify-center font-mono duration-300 group-hover:bottom-[0px] group-hover:ease-in-out">
        <h1 className="p-5 text-5xl">{title}</h1>
        <ClothingMenu />
      </div>
    </div>
  );
}

export default ClothingSlide;
