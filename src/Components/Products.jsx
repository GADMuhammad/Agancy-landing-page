const images = [
  {
    desktopImageURL: "/images/desktop/image-gallery-sugarcubes.jpg",
    mobileImageURL: "/images/mobile/image-gallery-sugar-cubes.jpg",
  },
  {
    desktopImageURL: "/images/desktop/image-gallery-milkbottles.jpg",
    mobileImageURL: "/images/mobile/image-gallery-milkbottles.jpg",
  },
  {
    desktopImageURL: "/images/desktop/image-gallery-orange.jpg",
    mobileImageURL: "/images/mobile/image-gallery-orange.jpg",
  },
  {
    desktopImageURL: "/images/desktop/image-gallery-cone.jpg",
    mobileImageURL: "/images/mobile/image-gallery-cone.jpg",
  },
];

export default function Products() {
  return (
    <section className="grid grid-cols-4 max-lg:grid-cols-2">
      {images.map(({ desktopImageURL, mobileImageURL }) => (
        <figure className="overflow-hidden" key={desktopImageURL}>
          <img
            className="transition-transform duration-500 hover:scale-125 max-second:hidden"
            src={desktopImageURL}
          />
          <img
            className="hidden transition-transform duration-500 hover:scale-125 max-second:block"
            src={mobileImageURL}
          />
        </figure>
      ))}
    </section>
  );
}
