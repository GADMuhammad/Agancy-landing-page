import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const opinions = [
  {
    quote:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    img: "/images/image-emily.jpg",
    person: "Emily R.",
    job: "Marketing Director",
  },
  {
    quote:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    img: "/images/image-thomas.jpg",
    person: "Thomas S.",
    job: "Chief Operating Officer",
  },
  {
    quote:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    img: "/images/image-jennie.jpg",
    person: "Jennie F.",
    job: "Business Owner",
  },
  {
    quote:
      "Sunnyside transformed our brand image and gave us a fresh perspective on how to connect with our audience.",
    img: "/images/image-michael.jpg",
    person: "Michael T.",
    job: "Creative Director",
  },
  {
    quote:
      "Working with Sunnyside was a game-changer. Their innovative approach and dedication brought our vision to life.",
    img: "/images/image-pole.jpg",
    person: "Pole L.",
    job: "Brand Manager",
  },
  {
    quote:
      "Professional, creative, and result-driven! Sunnyside exceeded our expectations in every possible way.",
    img: "/images/image-daniel.jpg",
    person: "Daniel K.",
    job: "Startup Founder",
  },
];

var settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  speed: 4400,
  autoplaySpeed: 4400,
  pauseOnHover: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1220,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Testimonials() {
  return (
    <section id="Projects" className="px-20 pb-8 pt-20 max-sixth:px-10">
      <h1 className="h-fit w-fit justify-self-center text-center text-3xl uppercase tracking-widest text-Grayish-blue">
        client testimonials
      </h1>

      <div className="my-10 items-center justify-center">
        <Slider {...settings}>
          {opinions.map(({ quote, img, person, job }) => (
            <figure key={person} className="mb-5 px-2 text-center">
              <img
                className="mb-6 h-28 w-28 justify-self-center rounded-full"
                src={img}
              />
              <blockquote className="mb-6">{quote}</blockquote>
              <h5 className="font-semibold tracking-wider">{person}</h5>
              <h6 className="tracking-wide">{job}</h6>
            </figure>
          ))}
        </Slider>
      </div>
    </section>
  );
}
