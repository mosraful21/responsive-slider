import { useEffect, useState } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.jpg";

const data = [
  {
    img: img1,
    name: "1. HP Elite Computer C2D Personal Computer",
    price: "1.60",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in provident autem vero iure exercitationem adipisci tempore doloribus vel minima.",
    ratting: 4,
  },
  {
    img: img5,
    name: "2. HP Elite Computer C2D Personal Computer",
    price: "1.60",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in provident autem vero iure exercitationem adipisci tempore doloribus vel minima.",
    discount: 4,
    ratting: 4,
  },
  {
    img: img2,
    name: "3. HP Elite Computer C2D Personal Computer",
    price: "1.60",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in provident autem vero iure exercitationem adipisci tempore doloribus vel minima.",
    discount: 7,
    ratting: 4,
  },
  {
    img: img6,
    name: "4. HP Elite Computer C2D Personal Computer",
    price: "1.60",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in provident autem vero iure exercitationem adipisci tempore doloribus vel minima.",
    ratting: 4,
  },
  {
    img: img5,
    name: "5. HP Elite Computer C2D Personal Computer",
    price: "1.60",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in provident autem vero iure exercitationem adipisci tempore doloribus vel minima.",
    ratting: 4,
  },
  {
    img: img6,
    name: "6. HP Elite Computer C2D Personal Computer",
    price: "1.60",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in provident autem vero iure exercitationem adipisci tempore doloribus vel minima.",
    discount: 6,
    ratting: 4,
  },
  {
    img: img6,
    name: "7. HP Elite Computer C2D Personal Computer",
    price: "1.60",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in provident autem vero iure exercitationem adipisci tempore doloribus vel minima.",
    discount: 9,
    ratting: 4,
  },
  {
    img: img2,
    name: "8. HP Elite Computer C2D Personal Computer",
    price: "1.60",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in provident autem vero iure exercitationem adipisci tempore doloribus vel minima.",
    ratting: 4,
  },
  {
    img: img5,
    name: "9. HP Elite Computer C2D Personal Computer",
    price: "1.60",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in provident autem vero iure exercitationem adipisci tempore doloribus vel minima.",
    discount: 6,
    ratting: 4,
  },
  {
    img: img1,
    name: "10. HP Elite Computer C2D Personal Computer",
    price: "1.60",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in provident autem vero iure exercitationem adipisci tempore doloribus vel minima.",
    discount: 5,
    ratting: 4,
  },
  {
    img: img2,
    name: "11. HP Elite Computer C2D Personal Computer",
    price: "1.60",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in provident autem vero iure exercitationem adipisci tempore doloribus vel minima.",
    ratting: 4,
  },
  {
    img: img6,
    name: "12. HP Elite Computer C2D Personal Computer",
    price: "1.60",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in provident autem vero iure exercitationem adipisci tempore doloribus vel minima.",
    discount: 7,
    ratting: 4,
  },
];

const FirstSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev + 1) % (isSmallDevice ? data.length : Math.ceil(data.length / 4))
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0
        ? (isSmallDevice ? data.length : Math.ceil(data.length / 4)) - 1
        : prev - 1
    );
  };

  const startIndex = currentSlide * (isSmallDevice ? 1 : 4);
  const endIndex = startIndex + (isSmallDevice ? 1 : 4);

  return (
    <div className="lg:w-[80%] md:w-[95%] mx-auto">
      <p className="text-3xl font-bold text-center p-3 border-b-2">
        Responsive Slider 1
      </p>
      <div className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-4 transition-transform duration-300 ease-in-out transform translate-x-[-${currentSlide * 50}%]">
          {data.slice(startIndex, endIndex).map((item, index) => (
            <div
              key={index}
              className="p-4 grid grid-cols-3 gap-4 parent relative"
            >
              <div className="relative par">
                <img src={item.img} alt={item.name} className="w-auto h-auto" />
              </div>

              {item.discount ? (
                <p className="absolute top-5 left-5 bg-orange-500 rounded-full p-1 text-white font-semibold">
                  -{item.discount}%
                </p>
              ) : (
                ""
              )}
              <div className="col-span-2">
                <p className="space-x-1">
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </p>
                <p className="md:text-xl text-sm font-semibold overflow-hidden whitespace-nowrap">
                  {item.name.length > 33
                    ? `${item.name.substring(0, 33)}...`
                    : item.name}
                </p>
                <p className="md:text-xl text-sm font-bold text-orange-500">
                  ${item.price}
                </p>
                <p className="text-gray-700 md:text-base text-xs">
                  {item.details}
                </p>
                <button className="bg-gray-600 rounded-full text-white w-max md:py-2 md:px-4 py-0 px-3 child">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className=" ">
          <button
            className="absolute top-[50%] left-0 w-10 h-10 bg-white border-gray-200 border hover:bg-orange-500 hover:text-white text-gray-400 rounded-full"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute top-[50%] right-0 w-10 h-10 bg-white border-gray-200 border hover:bg-orange-500 hover:text-white text-gray-400 rounded-full"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSlider;
