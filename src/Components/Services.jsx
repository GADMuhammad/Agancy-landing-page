import { Fragment } from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";

const content = [
  {
    heading: "Transform Your Brand",
    paragraph:
      "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    imageURL: "/images/desktop/image-transform.jpg",
    mobileImageURL: "/images/mobile/image-transform.jpg",
    order: ["order-0", "order-1"],
    styles: "before:bg-lightYellow before:hover:bg-softYellow",
  },
  {
    heading: "Stand out to the right audience",
    paragraph:
      "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,we'll build and extend your brand in digital places.",
    imageURL: "/images/desktop/image-stand-out.jpg",
    mobileImageURL: "/images/mobile/image-stand-out.jpg",
    order: ["order-3", "order-2"],
    styles: "before:bg-lightRed before:hover:bg-softRed",
  },
  {
    heading: " Graphic Design",
    paragraph:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
    imageURL: "/images/desktop/image-graphic-design.jpg",
    mobileImageURL: "/images/mobile/image-graphic-design.jpg",
  },
  {
    heading: "PhotoGraphy",
    paragraph:
      "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    imageURL: "/images/desktop/image-photography.jpg",
    mobileImageURL: "/images/mobile/image-photography.jpg",
  },
];

export default function Services() {
  const notify = () =>
    toast.info("Learn more page was not included in the design provided !", {
      position: "bottom-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
    });

  return (
    <section id="Services" className="grid grid-cols-2 max-lg:grid-cols-1">
      {content.map(
        ({ heading, paragraph, imageURL, order, styles, mobileImageURL }) =>
          styles ? (
            <Fragment key={imageURL}>
              <div
                className={`col-span-1 flex w-full flex-col gap-10 self-center px-36 max-first:px-20 max-lg:py-10 max-third:px-16 max-forth:px-10 max-seventh:px-4 ${order[0]}`}
              >
                <h2 className="text-5xl font-bold">{heading}</h2>
                <p className="font-Barlow text-lg">{paragraph}</p>

                <a
                  onClick={notify}
                  className={`relative z-0 w-fit cursor-pointer font-bold tracking-widest text-black before:absolute before:bottom-0 before:left-0 before:-z-10 before:h-2/5 before:w-full before:rounded-md before:transition-all before:duration-500 before:content-[''] before:hover:h-full ${styles}`}
                >
                  LEARN MORE
                </a>
                <ToastContainer />
              </div>

              <img
                className={`col-span-1 w-full max-lg:px-[2vw] max-second:hidden ${order[1]}`}
                src={imageURL}
                alt={heading}
              />

              <img
                className={`col-span-1 hidden w-full max-lg:px-[2vw] max-second:block ${order[1]}`}
                src={mobileImageURL}
                alt={heading}
              />
            </Fragment>
          ) : (
            <div key={imageURL} className="relative order-4">
              <img
                className="relative w-full max-lg:px-[2vw] max-second:hidden"
                src={imageURL}
              />
              <img
                className="relative hidden w-full max-lg:px-[2vw] max-second:block"
                src={mobileImageURL}
              />
              <div className="absolute bottom-0 flex w-full flex-col gap-4 px-20 py-10 text-center tracking-wider text-Dark-desaturated-cyan max-fifth:px-10">
                <h3 className="self-center font-Fraunces text-3xl font-bold">
                  {heading}
                </h3>
                <p className="text-md text-center text-lg tracking-wide">
                  {paragraph}
                </p>
              </div>
            </div>
          ),
      )}
    </section>
  );
}
