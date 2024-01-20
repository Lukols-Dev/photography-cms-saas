import { CardImage } from "@/components/ui/CardImage";

const GalleryPage = () => {
  return (
    <div className="flex flex-col py-4 gap-4">
      <header className="flex items-center rounded-md">
        <div>Items: {100}</div>
      </header>
      <div className="grid grid-cols-4 gap-4">
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
      </div>
    </div>
  );
};

export default GalleryPage;
