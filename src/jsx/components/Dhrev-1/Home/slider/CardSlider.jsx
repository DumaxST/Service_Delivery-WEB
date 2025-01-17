import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";


const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 500,
    slidesToScroll: 2,
    className: "center-card",
    centerPadding: "80px",
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 2,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 2,
          dots: false,
          centerMode: false,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 2,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 2,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="items">
        <div className="card me-sm-4">
          <div className="card-body ">
            <div className="media pb-4 border-bottom mb-4 align-items-center">
              <svg
                className="me-3"
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z"
                  fill="#3144F3"
                />
                <path
                  d="M20.6216 20.6219C23.142 18.1015 26.1342 16.1022 29.4273 14.7381C32.7205 13.374 36.25 12.672 39.8145 12.672C43.3789 12.672 46.9085 13.374 50.2016 14.7381C53.4947 16.1022 56.4869 18.1015 59.0074 20.6219C61.5278 23.1424 63.5271 26.1346 64.8912 29.4277C66.2552 32.7208 66.9573 36.2504 66.9573 39.8148C66.9573 43.3793 66.2552 46.9088 64.8912 50.202C63.5271 53.4951 61.5278 56.4873 59.0074 59.0077L49.4109 49.4113C50.6711 48.1511 51.6708 46.655 52.3528 45.0084C53.0348 43.3618 53.3859 41.5971 53.3859 39.8148C53.3859 38.0326 53.0348 36.2678 52.3528 34.6213C51.6708 32.9747 50.6711 31.4786 49.4109 30.2184C48.1507 28.9582 46.6546 27.9585 45.008 27.2765C43.3615 26.5944 41.5967 26.2434 39.8145 26.2434C38.0322 26.2434 36.2675 26.5944 34.6209 27.2765C32.9743 27.9585 31.4782 28.9582 30.218 30.2184L20.6216 20.6219Z"
                  fill="#8FD7FF"
                />
                <path
                  d="M20.6215 59.0077C15.5312 53.9174 12.6715 47.0135 12.6715 39.8148C12.6715 32.6161 15.5312 25.7122 20.6215 20.6219C25.7118 15.5316 32.6157 12.6719 39.8144 12.6719C47.0131 12.6719 53.917 15.5316 59.0073 20.6219L49.4108 30.2183C46.8657 27.6732 43.4138 26.2434 39.8144 26.2434C36.215 26.2434 32.7631 27.6732 30.2179 30.2183C27.6728 32.7635 26.243 36.2154 26.243 39.8148C26.243 43.4142 27.6728 46.8661 30.2179 49.4112L20.6215 59.0077Z"
                  fill="white"
                />
              </svg>
              <div className="media-body">
                <h4 className="fs-20">
                  <Link to="/search-job" className="text-black">
                    Intern UX Designer
                  </Link>
                </h4>
                <div className="d-flex">
                  <p className="mb-0 me-auto">Maximoz Team</p>
                  <Link to="/companies" className="btn-link">
                    +Follow
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-flex mb-3">
              <span className="text-black me-auto font-w500">
                <svg
                  className="me-3"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip3)">
                    <path
                      d="M14.0001 7.83997C10.5987 7.83997 7.65356 10.2024 6.91568 13.5229L4.49921 24.397C4.48149 24.4768 4.47254 24.5583 4.47254 24.64C4.47254 25.2585 4.97398 25.76 5.59254 25.76H22.4077C22.4894 25.76 22.5709 25.751 22.6507 25.7333C23.2545 25.5991 23.6352 25.0008 23.501 24.397L21.0846 13.5229C20.3467 10.2024 17.4016 7.83997 14.0001 7.83997ZM14.0001 5.59997C18.4515 5.59997 22.3056 8.69164 23.2712 13.037L25.6877 23.9111C26.0902 25.7226 24.9481 27.5174 23.1366 27.92C22.8973 27.9731 22.6529 28 22.4077 28H5.59254C3.73687 28 2.23254 26.4956 2.23254 24.64C2.23254 24.3948 2.25937 24.1504 2.31256 23.9111L4.72902 13.037C5.69466 8.69164 9.54877 5.59997 14.0001 5.59997Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M16.2402 12.32C16.8588 12.32 17.3602 12.8214 17.3602 13.44C17.3602 14.0585 16.8588 14.56 16.2402 14.56H13.4402C13.1309 14.56 12.8802 14.8107 12.8802 15.12C12.8802 15.4292 13.1309 15.68 13.4402 15.68H14.5602C16.1066 15.68 17.3602 16.9336 17.3602 18.48C17.3602 20.0264 16.1066 21.28 14.5602 21.28H11.7602C11.1416 21.28 10.6402 20.7785 10.6402 20.16C10.6402 19.5414 11.1416 19.04 11.7602 19.04H14.5602C14.8695 19.04 15.1202 18.7892 15.1202 18.48C15.1202 18.1707 14.8695 17.92 14.5602 17.92H13.4402C11.8938 17.92 10.6402 16.6664 10.6402 15.12C10.6402 13.5736 11.8938 12.32 13.4402 12.32H16.2402Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M12.8802 11.2C12.8802 10.5814 13.3817 10.08 14.0002 10.08C14.6188 10.08 15.1203 10.5814 15.1203 11.2V13.44C15.1203 14.0586 14.6188 14.56 14.0002 14.56C13.3817 14.56 12.8802 14.0586 12.8802 13.44V11.2Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M15.1203 22.4C15.1203 23.0186 14.6188 23.52 14.0002 23.52C13.3817 23.52 12.8802 23.0186 12.8802 22.4V20.16C12.8802 19.5414 13.3817 19.04 14.0002 19.04C14.6188 19.04 15.1203 19.5414 15.1203 20.16V22.4Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M12.8001 6.30404C13.0298 6.87836 12.7504 7.53017 12.1761 7.75989C11.6018 7.98962 10.95 7.71027 10.7203 7.13596L8.48027 1.53596C8.11627 0.625951 9.01409 -0.279605 9.92718 0.0765737C10.7659 0.403728 11.391 0.56 11.7602 0.56C11.8521 0.56 11.9283 0.540358 12.0946 0.469683C12.1387 0.450919 12.1906 0.428012 12.3122 0.374186C12.8915 0.12032 13.3491 -3.76254e-07 14.0002 -3.76254e-07C14.6497 -3.76254e-07 15.1146 0.12064 15.6957 0.372056C15.8432 0.43663 15.9021 0.462313 15.9542 0.483786C16.0978 0.542916 16.1669 0.56 16.2402 0.56C16.5878 0.56 17.2185 0.402322 18.0812 0.0734544C18.9932 -0.274175 19.8825 0.629785 19.5201 1.53596L17.2801 7.13596C17.0503 7.71027 16.3985 7.98962 15.8242 7.75989C15.2499 7.53017 14.9705 6.87836 15.2003 6.30404L16.6096 2.78073C16.4808 2.79355 16.3578 2.8 16.2402 2.8C15.8314 2.8 15.4927 2.7162 15.1013 2.55506C15.0241 2.52324 14.9394 2.4863 14.8064 2.42794C14.4822 2.28767 14.2985 2.24 14.0002 2.24C13.7048 2.24 13.5313 2.28561 13.2114 2.42581C13.1015 2.47449 13.0319 2.50524 12.9706 2.53126C12.5512 2.70952 12.2002 2.8 11.7602 2.8C11.6419 2.8 11.5189 2.79386 11.3911 2.78165L12.8001 6.30404Z"
                      fill="#A9A9A9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip3">
                      <rect width={28} height={28} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                $14,000 - $25,000
              </span>
              <span>/monthly</span>
            </div>
            <div className="d-flex mb-3">
              <span className="text-black me-auto font-w500">
                <svg
                  className="me-3"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C6.93398 0 2.8125 4.12148 2.8125 9.1875C2.8125 10.8091 3.24094 12.4034 4.05145 13.7979C4.24041 14.123 4.45162 14.4398 4.67934 14.7396L11.6008 24H12.3991L19.3207 14.7397C19.5483 14.4398 19.7595 14.1231 19.9485 13.7979C20.7591 12.4034 21.1875 10.8091 21.1875 9.1875C21.1875 4.12148 17.066 0 12 0ZM12 12.2344C10.32 12.2344 8.95312 10.8675 8.95312 9.1875C8.95312 7.50745 10.32 6.14062 12 6.14062C13.68 6.14062 15.0469 7.50745 15.0469 9.1875C15.0469 10.8675 13.68 12.2344 12 12.2344Z"
                    fill="#A9A9A9"
                  />
                </svg>
                London, England
              </span>
              <span>View Maps</span>
            </div>
            <div>
              <span className="text-black me-auto font-w500">
                <svg
                  className="me-3"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9999 5.99971H20.0001V21.9999H21.9999C23.0997 21.9999 24 21.0993 24 19.9995V7.99951C24 6.9 23.0997 5.99971 21.9999 5.99971Z"
                    fill="#A9A9A9"
                  />
                  <path
                    d="M15.9999 5.9997V3.9999C15.9999 2.90009 15.0996 1.9998 14.0001 1.9998H9.9999C8.90039 1.9998 8.0001 2.90009 8.0001 3.9999V5.9997H6V21.9999H18V5.9997H15.9999ZM14.0001 5.9997H9.9999V3.99961H14.0001V5.9997Z"
                    fill="#A9A9A9"
                  />
                  <path
                    d="M2.0001 5.99971C0.900293 5.99971 0 6.9 0 7.99981V19.9998C0 21.0996 0.900293 22.0002 2.0001 22.0002H3.9999V5.99971H2.0001Z"
                    fill="#A9A9A9"
                  />
                </svg>
                FULTIME
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="items">
        <div className="card me-sm-4">
          <div className="card-body">
            <div className="media pb-4 border-bottom mb-4 align-items-center">
              <svg
                className="me-3"
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z"
                  fill="#31B9F3"
                />
                <path
                  d="M20.6216 20.6219C23.142 18.1015 26.1342 16.1021 29.4273 14.7381C32.7205 13.374 36.25 12.6719 39.8145 12.6719C43.3789 12.6719 46.9085 13.374 50.2016 14.7381C53.4947 16.1021 56.4869 18.1015 59.0074 20.6219C61.5278 23.1424 63.5271 26.1346 64.8912 29.4277C66.2552 32.7208 66.9573 36.2504 66.9573 39.8148C66.9573 43.3793 66.2552 46.9088 64.8912 50.2019C63.5271 53.495 61.5278 56.4873 59.0074 59.0077L49.4109 49.4113C50.6711 48.151 51.6708 46.6549 52.3528 45.0084C53.0348 43.3618 53.3859 41.597 53.3859 39.8148C53.3859 38.0326 53.0348 36.2678 52.3528 34.6212C51.6708 32.9747 50.6711 31.4786 49.4109 30.2184C48.1507 28.9581 46.6546 27.9585 45.008 27.2764C43.3615 26.5944 41.5967 26.2434 39.8145 26.2434C38.0322 26.2434 36.2675 26.5944 34.6209 27.2764C32.9743 27.9585 31.4782 28.9581 30.218 30.2184L20.6216 20.6219Z"
                  fill="#31B9F3"
                />
                <path
                  d="M64 34.5C64 41.263 61.3661 47.749 56.6777 52.5312C51.9893 57.3134 45.6304 60 39 60C32.3696 60 26.0107 57.3134 21.3223 52.5312C16.6339 47.7491 14 41.263 14 34.5L26.5 34.5C26.5 37.8815 27.817 41.1245 30.1612 43.5156C32.5054 45.9067 35.6848 47.25 39 47.25C42.3152 47.25 45.4946 45.9067 47.8388 43.5156C50.183 41.1245 51.5 37.8815 51.5 34.5L64 34.5Z"
                  fill="#00FFF0"
                />
              </svg>
              <div className="media-body">
                <h4 className="fs-20">
                  <Link to="/search-job" className="text-black">
                    Senior UX Designer
                  </Link>
                </h4>
                <div className="d-flex">
                  <p className="mb-0 me-auto">Inacyx Studios</p>
                  <Link to="/companies" className="btn-link">
                    +Follow
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-flex mb-3">
              <span className="text-black me-auto font-w500">
                <svg
                  className="me-3"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip4)">
                    <path
                      d="M14.0001 7.83997C10.5987 7.83997 7.65356 10.2024 6.91568 13.5229L4.49921 24.397C4.48149 24.4768 4.47254 24.5583 4.47254 24.64C4.47254 25.2585 4.97398 25.76 5.59254 25.76H22.4077C22.4894 25.76 22.5709 25.751 22.6507 25.7333C23.2545 25.5991 23.6352 25.0008 23.501 24.397L21.0846 13.5229C20.3467 10.2024 17.4016 7.83997 14.0001 7.83997ZM14.0001 5.59997C18.4515 5.59997 22.3056 8.69164 23.2712 13.037L25.6877 23.9111C26.0902 25.7226 24.9481 27.5174 23.1366 27.92C22.8973 27.9731 22.6529 28 22.4077 28H5.59254C3.73687 28 2.23254 26.4956 2.23254 24.64C2.23254 24.3948 2.25937 24.1504 2.31256 23.9111L4.72902 13.037C5.69466 8.69164 9.54877 5.59997 14.0001 5.59997Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M16.2402 12.32C16.8588 12.32 17.3602 12.8214 17.3602 13.44C17.3602 14.0585 16.8588 14.56 16.2402 14.56H13.4402C13.1309 14.56 12.8802 14.8107 12.8802 15.12C12.8802 15.4292 13.1309 15.68 13.4402 15.68H14.5602C16.1066 15.68 17.3602 16.9336 17.3602 18.48C17.3602 20.0264 16.1066 21.28 14.5602 21.28H11.7602C11.1416 21.28 10.6402 20.7785 10.6402 20.16C10.6402 19.5414 11.1416 19.04 11.7602 19.04H14.5602C14.8695 19.04 15.1202 18.7892 15.1202 18.48C15.1202 18.1707 14.8695 17.92 14.5602 17.92H13.4402C11.8938 17.92 10.6402 16.6664 10.6402 15.12C10.6402 13.5736 11.8938 12.32 13.4402 12.32H16.2402Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M12.8802 11.2C12.8802 10.5814 13.3817 10.08 14.0002 10.08C14.6188 10.08 15.1203 10.5814 15.1203 11.2V13.44C15.1203 14.0586 14.6188 14.56 14.0002 14.56C13.3817 14.56 12.8802 14.0586 12.8802 13.44V11.2Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M15.1203 22.4C15.1203 23.0186 14.6188 23.52 14.0002 23.52C13.3817 23.52 12.8802 23.0186 12.8802 22.4V20.16C12.8802 19.5414 13.3817 19.04 14.0002 19.04C14.6188 19.04 15.1203 19.5414 15.1203 20.16V22.4Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M12.8001 6.30404C13.0298 6.87836 12.7504 7.53017 12.1761 7.75989C11.6018 7.98962 10.95 7.71027 10.7203 7.13596L8.48027 1.53596C8.11627 0.625951 9.01409 -0.279605 9.92718 0.0765737C10.7659 0.403728 11.391 0.56 11.7602 0.56C11.8521 0.56 11.9283 0.540358 12.0946 0.469683C12.1387 0.450919 12.1906 0.428012 12.3122 0.374186C12.8915 0.12032 13.3491 -3.76254e-07 14.0002 -3.76254e-07C14.6497 -3.76254e-07 15.1146 0.12064 15.6957 0.372056C15.8432 0.43663 15.9021 0.462313 15.9542 0.483786C16.0978 0.542916 16.1669 0.56 16.2402 0.56C16.5878 0.56 17.2185 0.402322 18.0812 0.0734544C18.9932 -0.274175 19.8825 0.629785 19.5201 1.53596L17.2801 7.13596C17.0503 7.71027 16.3985 7.98962 15.8242 7.75989C15.2499 7.53017 14.9705 6.87836 15.2003 6.30404L16.6096 2.78073C16.4808 2.79355 16.3578 2.8 16.2402 2.8C15.8314 2.8 15.4927 2.7162 15.1013 2.55506C15.0241 2.52324 14.9394 2.4863 14.8064 2.42794C14.4822 2.28767 14.2985 2.24 14.0002 2.24C13.7048 2.24 13.5313 2.28561 13.2114 2.42581C13.1015 2.47449 13.0319 2.50524 12.9706 2.53126C12.5512 2.70952 12.2002 2.8 11.7602 2.8C11.6419 2.8 11.5189 2.79386 11.3911 2.78165L12.8001 6.30404Z"
                      fill="#A9A9A9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip4">
                      <rect width={28} height={28} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                $21,000 - $25,000
              </span>
              <span>/monthly</span>
            </div>
            <div className="d-flex mb-3">
              <span className="text-black me-auto font-w500">
                <svg
                  className="me-3"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C6.93398 0 2.8125 4.12148 2.8125 9.1875C2.8125 10.8091 3.24094 12.4034 4.05145 13.7979C4.24041 14.123 4.45162 14.4398 4.67934 14.7396L11.6008 24H12.3991L19.3207 14.7397C19.5483 14.4398 19.7595 14.1231 19.9485 13.7979C20.7591 12.4034 21.1875 10.8091 21.1875 9.1875C21.1875 4.12148 17.066 0 12 0ZM12 12.2344C10.32 12.2344 8.95312 10.8675 8.95312 9.1875C8.95312 7.50745 10.32 6.14062 12 6.14062C13.68 6.14062 15.0469 7.50745 15.0469 9.1875C15.0469 10.8675 13.68 12.2344 12 12.2344Z"
                    fill="#A9A9A9"
                  />
                </svg>
                Manchester, England
              </span>
              <span>View Maps</span>
            </div>
            <div>
              <span className="text-black me-auto font-w500">
                <svg
                  className="me-3"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9999 5.99971H20.0001V21.9999H21.9999C23.0997 21.9999 24 21.0993 24 19.9995V7.99951C24 6.9 23.0997 5.99971 21.9999 5.99971Z"
                    fill="#A9A9A9"
                  />
                  <path
                    d="M15.9999 5.9997V3.9999C15.9999 2.90009 15.0996 1.9998 14.0001 1.9998H9.9999C8.90039 1.9998 8.0001 2.90009 8.0001 3.9999V5.9997H6V21.9999H18V5.9997H15.9999ZM14.0001 5.9997H9.9999V3.99961H14.0001V5.9997Z"
                    fill="#A9A9A9"
                  />
                  <path
                    d="M2.0001 5.99971C0.900293 5.99971 0 6.9 0 7.99981V19.9998C0 21.0996 0.900293 22.0002 2.0001 22.0002H3.9999V5.99971H2.0001Z"
                    fill="#A9A9A9"
                  />
                </svg>
                FREELANCE, PART TIME
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="items">
        <div className="card me-sm-4">
          <div className="card-body">
            <div className="media pb-4 border-bottom mb-4 align-items-center">
              <svg
                className="me-3"
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z"
                  fill="#EFF331"
                />
                <path
                  d="M66.9573 39.8148C66.9573 43.3792 66.2552 46.9088 64.8912 50.2019C63.5271 53.495 61.5278 56.4872 59.0073 59.0077C56.4869 61.5281 53.4947 63.5275 50.2015 64.8915C46.9084 66.2556 43.3789 66.9576 39.8144 66.9576C36.25 66.9576 32.7204 66.2556 29.4273 64.8915C26.1342 63.5275 23.142 61.5281 20.6215 59.0077C18.1011 56.4872 16.1018 53.495 14.7377 50.2019C13.3736 46.9088 12.6716 43.3792 12.6716 39.8148L26.243 39.8148C26.243 41.597 26.594 43.3618 27.2761 45.0083C27.9581 46.6549 28.9578 48.151 30.218 49.4112C31.4782 50.6715 32.9743 51.6711 34.6209 52.3531C36.2674 53.0352 38.0322 53.3862 39.8144 53.3862C41.5966 53.3862 43.3614 53.0352 45.008 52.3531C46.6545 51.6711 48.1506 50.6715 49.4109 49.4112C50.6711 48.151 51.6708 46.6549 52.3528 45.0083C53.0348 43.3618 53.3859 41.597 53.3859 39.8148L66.9573 39.8148Z"
                  fill="#F0FF49"
                />
                <path
                  d="M12.6717 39.8148C12.6717 32.616 15.5313 25.7121 20.6216 20.6219C25.7119 15.5316 32.6158 12.6719 39.8145 12.6719C47.0132 12.6719 53.9171 15.5316 59.0074 20.6219C64.0977 25.7121 66.9574 32.616 66.9574 39.8148L53.3859 39.8148C53.3859 36.2154 51.9561 32.7635 49.411 30.2183C46.8658 27.6732 43.4139 26.2433 39.8145 26.2433C36.2151 26.2433 32.7632 27.6732 30.2181 30.2183C27.6729 32.7635 26.2431 36.2154 26.2431 39.8148L12.6717 39.8148Z"
                  fill="#1E1E1E"
                />
              </svg>
              <div className="media-body">
                <h4 className="fs-20">
                  <Link to="/search-job" className="text-black">
                    Freelance UI Designer
                  </Link>
                </h4>
                <div className="d-flex">
                  <p className="mb-0 me-auto">Naonatu Team</p>
                  <Link to="/companies" className="btn-link">
                    +Follow
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-flex mb-3">
              <span className="text-black me-auto font-w500">
                <svg
                  className="me-3"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip5)">
                    <path
                      d="M14.0001 7.83997C10.5987 7.83997 7.65356 10.2024 6.91568 13.5229L4.49921 24.397C4.48149 24.4768 4.47254 24.5583 4.47254 24.64C4.47254 25.2585 4.97398 25.76 5.59254 25.76H22.4077C22.4894 25.76 22.5709 25.751 22.6507 25.7333C23.2545 25.5991 23.6352 25.0008 23.501 24.397L21.0846 13.5229C20.3467 10.2024 17.4016 7.83997 14.0001 7.83997ZM14.0001 5.59997C18.4515 5.59997 22.3056 8.69164 23.2712 13.037L25.6877 23.9111C26.0902 25.7226 24.9481 27.5174 23.1366 27.92C22.8973 27.9731 22.6529 28 22.4077 28H5.59254C3.73687 28 2.23254 26.4956 2.23254 24.64C2.23254 24.3948 2.25937 24.1504 2.31256 23.9111L4.72902 13.037C5.69466 8.69164 9.54877 5.59997 14.0001 5.59997Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M16.2402 12.32C16.8588 12.32 17.3602 12.8214 17.3602 13.44C17.3602 14.0585 16.8588 14.56 16.2402 14.56H13.4402C13.1309 14.56 12.8802 14.8107 12.8802 15.12C12.8802 15.4292 13.1309 15.68 13.4402 15.68H14.5602C16.1066 15.68 17.3602 16.9336 17.3602 18.48C17.3602 20.0264 16.1066 21.28 14.5602 21.28H11.7602C11.1416 21.28 10.6402 20.7785 10.6402 20.16C10.6402 19.5414 11.1416 19.04 11.7602 19.04H14.5602C14.8695 19.04 15.1202 18.7892 15.1202 18.48C15.1202 18.1707 14.8695 17.92 14.5602 17.92H13.4402C11.8938 17.92 10.6402 16.6664 10.6402 15.12C10.6402 13.5736 11.8938 12.32 13.4402 12.32H16.2402Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M12.8802 11.2C12.8802 10.5814 13.3817 10.08 14.0002 10.08C14.6188 10.08 15.1203 10.5814 15.1203 11.2V13.44C15.1203 14.0586 14.6188 14.56 14.0002 14.56C13.3817 14.56 12.8802 14.0586 12.8802 13.44V11.2Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M15.1203 22.4C15.1203 23.0186 14.6188 23.52 14.0002 23.52C13.3817 23.52 12.8802 23.0186 12.8802 22.4V20.16C12.8802 19.5414 13.3817 19.04 14.0002 19.04C14.6188 19.04 15.1203 19.5414 15.1203 20.16V22.4Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M12.8001 6.30404C13.0298 6.87836 12.7504 7.53017 12.1761 7.75989C11.6018 7.98962 10.95 7.71027 10.7203 7.13596L8.48027 1.53596C8.11627 0.625951 9.01409 -0.279605 9.92718 0.0765737C10.7659 0.403728 11.391 0.56 11.7602 0.56C11.8521 0.56 11.9283 0.540358 12.0946 0.469683C12.1387 0.450919 12.1906 0.428012 12.3122 0.374186C12.8915 0.12032 13.3491 -3.76254e-07 14.0002 -3.76254e-07C14.6497 -3.76254e-07 15.1146 0.12064 15.6957 0.372056C15.8432 0.43663 15.9021 0.462313 15.9542 0.483786C16.0978 0.542916 16.1669 0.56 16.2402 0.56C16.5878 0.56 17.2185 0.402322 18.0812 0.0734544C18.9932 -0.274175 19.8825 0.629785 19.5201 1.53596L17.2801 7.13596C17.0503 7.71027 16.3985 7.98962 15.8242 7.75989C15.2499 7.53017 14.9705 6.87836 15.2003 6.30404L16.6096 2.78073C16.4808 2.79355 16.3578 2.8 16.2402 2.8C15.8314 2.8 15.4927 2.7162 15.1013 2.55506C15.0241 2.52324 14.9394 2.4863 14.8064 2.42794C14.4822 2.28767 14.2985 2.24 14.0002 2.24C13.7048 2.24 13.5313 2.28561 13.2114 2.42581C13.1015 2.47449 13.0319 2.50524 12.9706 2.53126C12.5512 2.70952 12.2002 2.8 11.7602 2.8C11.6419 2.8 11.5189 2.79386 11.3911 2.78165L12.8001 6.30404Z"
                      fill="#A9A9A9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip5">
                      <rect width={28} height={28} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                $21,000 - $25,000
              </span>
              <span>/monthly</span>
            </div>
            <div className="d-flex mb-3">
              <span className="text-black me-auto font-w500">
                <svg
                  className="me-3"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C6.93398 0 2.8125 4.12148 2.8125 9.1875C2.8125 10.8091 3.24094 12.4034 4.05145 13.7979C4.24041 14.123 4.45162 14.4398 4.67934 14.7396L11.6008 24H12.3991L19.3207 14.7397C19.5483 14.4398 19.7595 14.1231 19.9485 13.7979C20.7591 12.4034 21.1875 10.8091 21.1875 9.1875C21.1875 4.12148 17.066 0 12 0ZM12 12.2344C10.32 12.2344 8.95312 10.8675 8.95312 9.1875C8.95312 7.50745 10.32 6.14062 12 6.14062C13.68 6.14062 15.0469 7.50745 15.0469 9.1875C15.0469 10.8675 13.68 12.2344 12 12.2344Z"
                    fill="#A9A9A9"
                  />
                </svg>
                Manchester, England
              </span>
              <span>View Maps</span>
            </div>
            <div>
              <span className="text-black me-auto font-w500">
                <svg
                  className="me-3"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9999 5.99971H20.0001V21.9999H21.9999C23.0997 21.9999 24 21.0993 24 19.9995V7.99951C24 6.9 23.0997 5.99971 21.9999 5.99971Z"
                    fill="#A9A9A9"
                  />
                  <path
                    d="M15.9999 5.9997V3.9999C15.9999 2.90009 15.0996 1.9998 14.0001 1.9998H9.9999C8.90039 1.9998 8.0001 2.90009 8.0001 3.9999V5.9997H6V21.9999H18V5.9997H15.9999ZM14.0001 5.9997H9.9999V3.99961H14.0001V5.9997Z"
                    fill="#A9A9A9"
                  />
                  <path
                    d="M2.0001 5.99971C0.900293 5.99971 0 6.9 0 7.99981V19.9998C0 21.0996 0.900293 22.0002 2.0001 22.0002H3.9999V5.99971H2.0001Z"
                    fill="#A9A9A9"
                  />
                </svg>
                FREELANCE, PART TIME
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="items">
        <div className="card me-sm-4">
          <div className="card-body">
            <div className="media pb-4 border-bottom mb-4 align-items-center">
              <svg
                className="me-3"
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z"
                  fill="#D3D3D3"
                />
                <path
                  d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z"
                  fill="#F35F31"
                />
                <path
                  d="M20.6216 20.6219C23.142 18.1015 26.1342 16.1022 29.4273 14.7381C32.7205 13.374 36.25 12.672 39.8145 12.672C43.3789 12.672 46.9085 13.374 50.2016 14.7381C53.4947 16.1022 56.4869 18.1015 59.0074 20.6219C61.5278 23.1424 63.5271 26.1346 64.8912 29.4277C66.2552 32.7208 66.9573 36.2504 66.9573 39.8148C66.9573 43.3793 66.2552 46.9088 64.8912 50.202C63.5271 53.4951 61.5278 56.4873 59.0074 59.0077L49.4109 49.4113C50.6711 48.1511 51.6708 46.655 52.3528 45.0084C53.0348 43.3618 53.3859 41.5971 53.3859 39.8148C53.3859 38.0326 53.0348 36.2678 52.3528 34.6213C51.6708 32.9747 50.6711 31.4786 49.4109 30.2184C48.1507 28.9582 46.6546 27.9585 45.008 27.2765C43.3615 26.5944 41.5967 26.2434 39.8145 26.2434C38.0322 26.2434 36.2675 26.5944 34.6209 27.2765C32.9743 27.9585 31.4782 28.9582 30.218 30.2184L20.6216 20.6219Z"
                  fill="white"
                />
                <path
                  d="M59.0073 59.0077C53.917 64.0979 47.0131 66.9576 39.8144 66.9576C32.6157 66.9576 25.7118 64.098 20.6215 59.0077C15.5312 53.9174 12.6715 47.0135 12.6715 39.8148C12.6715 32.6161 15.5312 25.7122 20.6215 20.6219L30.2179 30.2183C27.6728 32.7635 26.243 36.2154 26.243 39.8148C26.243 43.4141 27.6728 46.8661 30.2179 49.4112C32.7631 51.9564 36.215 53.3862 39.8144 53.3862C43.4138 53.3862 46.8657 51.9564 49.4108 49.4112L59.0073 59.0077Z"
                  fill="#FFCF23"
                />
              </svg>
              <div className="media-body">
                <h4 className="fs-20">
                  <Link to="/search-job" className="text-black">
                    Senior UX Designer
                  </Link>
                </h4>
                <div className="d-flex">
                  <p className="mb-0 me-auto">Inacyx Studios</p>
                  <Link to="/companies" className="btn-link">
                    +Follow
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-flex mb-3">
              <span className="text-black me-auto font-w500">
                <svg
                  className="me-3"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip6)">
                    <path
                      d="M14.0001 7.83997C10.5987 7.83997 7.65356 10.2024 6.91568 13.5229L4.49921 24.397C4.48149 24.4768 4.47254 24.5583 4.47254 24.64C4.47254 25.2585 4.97398 25.76 5.59254 25.76H22.4077C22.4894 25.76 22.5709 25.751 22.6507 25.7333C23.2545 25.5991 23.6352 25.0008 23.501 24.397L21.0846 13.5229C20.3467 10.2024 17.4016 7.83997 14.0001 7.83997ZM14.0001 5.59997C18.4515 5.59997 22.3056 8.69164 23.2712 13.037L25.6877 23.9111C26.0902 25.7226 24.9481 27.5174 23.1366 27.92C22.8973 27.9731 22.6529 28 22.4077 28H5.59254C3.73687 28 2.23254 26.4956 2.23254 24.64C2.23254 24.3948 2.25937 24.1504 2.31256 23.9111L4.72902 13.037C5.69466 8.69164 9.54877 5.59997 14.0001 5.59997Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M16.2402 12.32C16.8588 12.32 17.3602 12.8214 17.3602 13.44C17.3602 14.0585 16.8588 14.56 16.2402 14.56H13.4402C13.1309 14.56 12.8802 14.8107 12.8802 15.12C12.8802 15.4292 13.1309 15.68 13.4402 15.68H14.5602C16.1066 15.68 17.3602 16.9336 17.3602 18.48C17.3602 20.0264 16.1066 21.28 14.5602 21.28H11.7602C11.1416 21.28 10.6402 20.7785 10.6402 20.16C10.6402 19.5414 11.1416 19.04 11.7602 19.04H14.5602C14.8695 19.04 15.1202 18.7892 15.1202 18.48C15.1202 18.1707 14.8695 17.92 14.5602 17.92H13.4402C11.8938 17.92 10.6402 16.6664 10.6402 15.12C10.6402 13.5736 11.8938 12.32 13.4402 12.32H16.2402Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M12.8802 11.2C12.8802 10.5814 13.3817 10.08 14.0002 10.08C14.6188 10.08 15.1203 10.5814 15.1203 11.2V13.44C15.1203 14.0586 14.6188 14.56 14.0002 14.56C13.3817 14.56 12.8802 14.0586 12.8802 13.44V11.2Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M15.1203 22.4C15.1203 23.0186 14.6188 23.52 14.0002 23.52C13.3817 23.52 12.8802 23.0186 12.8802 22.4V20.16C12.8802 19.5414 13.3817 19.04 14.0002 19.04C14.6188 19.04 15.1203 19.5414 15.1203 20.16V22.4Z"
                      fill="#A9A9A9"
                    />
                    <path
                      d="M12.8001 6.30404C13.0298 6.87836 12.7504 7.53017 12.1761 7.75989C11.6018 7.98962 10.95 7.71027 10.7203 7.13596L8.48027 1.53596C8.11627 0.625951 9.01409 -0.279605 9.92718 0.0765737C10.7659 0.403728 11.391 0.56 11.7602 0.56C11.8521 0.56 11.9283 0.540358 12.0946 0.469683C12.1387 0.450919 12.1906 0.428012 12.3122 0.374186C12.8915 0.12032 13.3491 -3.76254e-07 14.0002 -3.76254e-07C14.6497 -3.76254e-07 15.1146 0.12064 15.6957 0.372056C15.8432 0.43663 15.9021 0.462313 15.9542 0.483786C16.0978 0.542916 16.1669 0.56 16.2402 0.56C16.5878 0.56 17.2185 0.402322 18.0812 0.0734544C18.9932 -0.274175 19.8825 0.629785 19.5201 1.53596L17.2801 7.13596C17.0503 7.71027 16.3985 7.98962 15.8242 7.75989C15.2499 7.53017 14.9705 6.87836 15.2003 6.30404L16.6096 2.78073C16.4808 2.79355 16.3578 2.8 16.2402 2.8C15.8314 2.8 15.4927 2.7162 15.1013 2.55506C15.0241 2.52324 14.9394 2.4863 14.8064 2.42794C14.4822 2.28767 14.2985 2.24 14.0002 2.24C13.7048 2.24 13.5313 2.28561 13.2114 2.42581C13.1015 2.47449 13.0319 2.50524 12.9706 2.53126C12.5512 2.70952 12.2002 2.8 11.7602 2.8C11.6419 2.8 11.5189 2.79386 11.3911 2.78165L12.8001 6.30404Z"
                      fill="#A9A9A9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip6">
                      <rect width={28} height={28} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                $21,000 - $25,000
              </span>
              <span>/monthly</span>
            </div>
            <div className="d-flex mb-3">
              <span className="text-black me-auto font-w500">
                <svg
                  className="me-3"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C6.93398 0 2.8125 4.12148 2.8125 9.1875C2.8125 10.8091 3.24094 12.4034 4.05145 13.7979C4.24041 14.123 4.45162 14.4398 4.67934 14.7396L11.6008 24H12.3991L19.3207 14.7397C19.5483 14.4398 19.7595 14.1231 19.9485 13.7979C20.7591 12.4034 21.1875 10.8091 21.1875 9.1875C21.1875 4.12148 17.066 0 12 0ZM12 12.2344C10.32 12.2344 8.95312 10.8675 8.95312 9.1875C8.95312 7.50745 10.32 6.14062 12 6.14062C13.68 6.14062 15.0469 7.50745 15.0469 9.1875C15.0469 10.8675 13.68 12.2344 12 12.2344Z"
                    fill="#A9A9A9"
                  />
                </svg>
                Manchester, England
              </span>
              <span>View Maps</span>
            </div>
            <div>
              <span className="text-black me-auto font-w500">
                <svg
                  className="me-3"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9999 5.99971H20.0001V21.9999H21.9999C23.0997 21.9999 24 21.0993 24 19.9995V7.99951C24 6.9 23.0997 5.99971 21.9999 5.99971Z"
                    fill="#A9A9A9"
                  />
                  <path
                    d="M15.9999 5.9997V3.9999C15.9999 2.90009 15.0996 1.9998 14.0001 1.9998H9.9999C8.90039 1.9998 8.0001 2.90009 8.0001 3.9999V5.9997H6V21.9999H18V5.9997H15.9999ZM14.0001 5.9997H9.9999V3.99961H14.0001V5.9997Z"
                    fill="#A9A9A9"
                  />
                  <path
                    d="M2.0001 5.99971C0.900293 5.99971 0 6.9 0 7.99981V19.9998C0 21.0996 0.900293 22.0002 2.0001 22.0002H3.9999V5.99971H2.0001Z"
                    fill="#A9A9A9"
                  />
                </svg>
                FREELANCE, PART TIME
              </span>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default CardSlider;
