import Image from "next/image";

export default function LocationCard() {
  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden bg-black">
      <Image
        src="/images/showroom/showroom-placeholder.jpg"
        alt="ABC STONES INDIA PVT. LTD. showroom — representative image, under development"
        fill
        sizes="100vw"
        className="object-contain"
      />
      <div className="absolute inset-0 bg-black/45 flex items-center justify-center text-center px-5 sm:px-6">
        <p className="text-cream font-serif text-xl sm:text-3xl">
          Showroom Gallery Coming Soon
        </p>
      </div>
    </div>
  );
}
