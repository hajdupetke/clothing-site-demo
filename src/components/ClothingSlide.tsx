import ClothingMenu from './ClothingMenu';
import maleImage from '../assets/male-clothing-model.jpg';
import femaleImage from '../assets/female-clothing-model.jpg';
import kidImage from '../assets/kid-clothing-model.jpg';

interface ClothingProps {
  title: string;
}

function ClothingSlide({ title }: ClothingProps) {
  function getSrc(type: string): string | undefined {
    if (type === 'Men') return maleImage;
    if (type === 'Women') return femaleImage;
    return kidImage;
  }

  return (
    <div className="group relative h-screen w-full bg-black text-white lg:w-1/3">
      <img
        src={getSrc(title)}
        className="relative top-[0px] h-full w-full max-w-full object-cover duration-300 group-hover:top-[-50vh] group-hover:ease-in-out"
        alt="clothing model"
      />
      <div className="absolute bottom-[-50vh] flex h-[50vh] w-full flex-col items-center justify-center font-mono duration-300 group-hover:bottom-[0px] group-hover:ease-in-out">
        <h1 className="p-5 text-5xl">{title}</h1>
        <ClothingMenu />
      </div>
    </div>
  );
}

export default ClothingSlide;
