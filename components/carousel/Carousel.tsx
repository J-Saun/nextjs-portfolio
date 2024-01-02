"use client";

import styles from "./Carousel.module.scss";

import { useState } from "react";

import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });

function urlFor(source: any) {
  return builder.image(source);
}

interface CarouselProps {
  items: string[];
  alts: string[];
  captions: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items, alts, captions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };
  // console.log("Carousel file: ", items);
  return (
    <div className="relative w-full">
      <Image
        src={builder
          .image(`${items[currentIndex]}`)
          .width(1200)
          .height(400)
          .quality(80)
          .url()}
        width={1200}
        height={500}
        alt="alt"
        layout="responsive"
        objectFit="cover"
        className="carousel_img"
      />
      <h3 className="text-center absolute inset-x-0 p-5">
        {captions[currentIndex]}
      </h3>

      <span className="sr-only">{alts[currentIndex]}</span>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 bg-black bg-opacity-50 text-white">
        <button className="text-white px-4 py-2 rounded" onClick={handlePrev}>
          <MdOutlineArrowBackIosNew />
        </button>
        <div className={`flex items-center space-x-2 `}>
          {items.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-6 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              } ${styles.carouselIndicator}`}
              onMouseDown={() => handleIndicatorClick(index)}
            ></div>
          ))}
        </div>
        <button className=" text-white px-4 py-2 rounded" onClick={handleNext}>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

// export const EmblaCarousel = (props: any) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

//   useEffect(() => {
//     if (emblaApi) {
//       console.log(emblaApi.slideNodes()); // Access API
//     }
//   }, [emblaApi]);

//   const pic = props.props[0][1].image.asset;
//   console.log(
//     "Carousel props key: ",
//     // props,
//     // props.props[0][0].image.asset._ref
//     props.props[0][0].image,
//     pic
//   );

//   const carouselImages = props.props[0];
//   return (
//     <div className={styles.embla} ref={emblaRef}>
//       <div className="embla__container">
//         <>
//           <div className={styles.embla} ref={emblaRef}>
//             <div className="embla__container">
//               <div className={styles.embla__slide}>
//                 {carouselImages && (
//                   <Image
//                     src={builder
//                       .image(props.props[0][0].image.asset)
//                       .width(300)
//                       .height(300)
//                       .quality(80)
//                       .url()}
//                     width={300}
//                     height={300}
//                     alt={"alt"}
//                   />
//                 )}
//               </div>
//               <div className={styles.embla__slide}>Slide 1</div>
//               <div className={styles.embla__slide}>Slide 2</div>
//               {/* <div className={styles.embla__slide}>Slide 3</div> */}
//             </div>
//           </div>

//           <p></p>
//         </>
//       </div>
//     </div>
//   );
// };
