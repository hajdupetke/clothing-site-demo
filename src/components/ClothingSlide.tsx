interface ClothingProps {
  title: string;
  background: string;
  children: JSX.Element;
}

function ClothingSlide({ title, background, children }: ClothingProps) {
  return (
    <div className="group relative h-screen w-1/3">
      <div
        className={`relative ${background} group-hover:ease-in-out duration-300 top-[0px] bg-cover bg-blend-overlay bg-stone-600 h-full w-full max-w-full group-hover:top-[-120px]`}
      />
      <div className="absolute bottom-[-120px] group-hover:ease-in-out duration-300 h-[120px] group-hover:bottom-[0px]">
        <h1 className="text-4xl">{title}</h1>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default ClothingSlide;
