import Layout from "../components/Layout";
import Image from "next/image";
import port1 from "../public/images/port1.png";
import port2 from "../public/images/port2.png";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center max-w-screen-md w-full p-4">
        <div className=" mt-16 max-w-screen-sm w-full px-2 sm:px-6 ">
          <svg
            className="max-w-screen-sm pr-12"
            width="551"
            height="215"
            viewBox="0 0 551 215"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M179 122.5C46.4778 112.644 5.27878 171.75 1.32362 209.029C0.974014 212.324 3.68629 215 6.99999 215H516.039C522.783 215 524.401 205.923 517.998 203.806C448.925 180.974 286.631 130.504 179 122.5Z"
              fill="#F1F5F9"
            />
            <path
              d="M36.4842 143.939C36.4842 140.695 47.9745 120.959 53.7197 111.496L139.39 123.662L144.967 126.197L123.676 174.355C117.762 175.031 103.094 174.456 91.7393 166.751C80.3841 159.046 74.1658 143.602 72.476 136.842C69.9414 141.405 64.8721 150.935 64.8721 152.557C64.8721 154.179 60.4787 158.64 58.282 160.668C57.6061 164.217 55.5446 171.922 52.7058 174.355C49.867 176.788 38.0049 176.721 32.4287 176.383L23.304 177.904L11.6447 176.383L10.6309 174.355L34.9634 166.751L36.4842 160.668L38.0049 157.626C37.498 154.416 36.4842 147.184 36.4842 143.939Z"
              fill="white"
            />
            <path
              d="M311.689 146L316.689 140.5L327.689 139V153.5L325.689 157.5L315.189 161.5L311.689 146Z"
              fill="white"
            />
            <path
              d="M187.571 74.2578C165.726 87.7852 134.586 141.623 116.355 173.912C121.426 179.036 133.998 182.838 146.472 183.151C180.476 184.003 205.899 178.444 219.13 176.739C230.786 175.237 298.828 166.121 316.438 161.914L312.883 145.038L232.39 142.453L207.895 143.832L196.91 142.669L181.729 140.13L194.818 124.279L204.429 141.677L207.871 143.077L235.167 142.213C232.324 135.885 228.42 124.382 228.334 121.667C228.227 118.273 208.092 78.5157 205.745 75.9474C203.571 73.5673 193.486 70.5948 187.571 74.2578Z"
              fill="#1B212B"
            />
            <path
              d="M104.336 16.1058C101.06 16.4347 93.5888 19.035 89.9046 26.8056C85.2993 36.5188 85.0981 48.1306 85.7934 52.8173M111.948 13.9558C116.389 13.9905 126.52 14.8485 131.511 18.0028C137.75 21.9457 145.92 29.646 145.266 40.8538C144.612 52.0617 137.413 61.4922 136.347 65.4195C135.28 69.3467 134.408 76.7002 132.889 80.2234C131.674 83.042 129.151 85.0182 128.041 85.6539M115.755 35.652C113.932 36.3282 110 38.7279 108.863 42.9169C107.441 48.1533 107.708 52.8643 103.167 56.1291C98.6259 59.394 95.4667 64.2992 95.2326 67.7496C95.0454 70.51 95.5106 75.1811 95.7666 77.1716M120.369 33.6719C120.576 34.8059 121.358 37.4827 122.826 39.1181M126.365 33.3321C126.446 34.7597 127.06 38.0188 128.87 39.6348C131.133 41.6548 134.68 43.602 136.062 45.2422C137.168 46.5544 138.129 48.8487 138.471 49.8319M135.546 51.2866C133.607 54.9769 129.319 61.7372 128.064 63.311C126.867 64.8106 124.587 66.1667 121.357 66.269C118.127 66.3713 114.432 65.3726 113.074 64.1606C111.988 63.191 110.009 68.2011 109.156 70.8274M116.055 48.5244L116.079 48.9527M130.406 51.5778L130.431 52.0061M126.855 48.1824C126.077 51.5408 125.191 56.3586 124.525 56.7401C123.859 57.1215 122.81 56.7944 122.81 56.7944M116.662 59.2311C116.662 59.2311 117.344 60.1916 118.136 60.9342C119.02 61.7646 120.759 62.0083 120.686 62.0106M95.3092 67.0939C95.6594 68.2197 97.9007 70.9381 99.3298 71.8139C101.352 73.0534 105.019 73.6397 105.019 73.6397M91.8221 60.6389C88.8618 58.9449 82.104 55.948 78.7556 57.5127C74.5699 59.4685 66.233 72.4418 63.3979 80.6929C60.7337 88.4469 57.0191 100.739 55.6377 106.689M114.319 70.9644C116.843 72.5399 121.164 76.0002 122.625 80.9632C124.086 85.9262 125.13 99.7675 125.328 106.001M53.8549 110.911C49.7236 118.879 40.9907 135.614 39.1098 138.814C36.7586 142.815 34.6016 150.241 37.4625 155.234C40.3234 160.228 35.0628 158.378 34.7802 160.972C34.4975 163.566 36.3562 166.038 35.0714 166.111C34.0436 166.169 31.2818 167.472 30.0293 168.115L32.6804 176.988C36.8446 177.181 46.5096 176.891 51.8555 174.182C57.2014 171.473 58.1172 163.373 57.9068 159.661C59.0408 159.454 61.6222 158.505 62.8762 156.372C64.1301 154.239 76.3579 126.392 82.315 112.735M29.7109 168.882C24.2 170.197 11.475 172.776 10.2404 175.252C9.00589 177.728 14.9683 177.424 17.5218 176.993M26.038 173.497C24.2864 173.774 18.7535 175.237 20.109 177.386C20.8528 178.565 27.8385 177.524 32.5276 176.518M128.599 95.5041C132.79 91.1134 141.329 82.0652 141.956 80.9985C142.583 79.9318 147.62 74.8057 150.06 72.3759C152.87 73.9353 158.917 77.0297 160.63 76.9326C162.771 76.8113 153.625 89.7894 152.437 91.5753C151.249 93.3612 145.588 102.511 143.972 104.321C142.679 105.769 137.609 113.905 135.376 117.468M152.858 73.2109C152.513 69.6501 152.467 60.8221 154.523 60.7056C156.579 60.5891 157.222 62.8441 157.287 63.9862M160.149 61.7497C162.018 59.3523 166.319 55.3849 168.569 58.6946C170.819 62.0043 165.203 70.0562 162.113 73.6684M125.57 110.284C124.921 111.466 123.642 114.174 123.72 115.544C123.817 117.257 127.292 117.92 128.674 119.56C130.056 121.2 128.892 123.415 130.201 123.77C131.51 124.125 134.84 122.218 138.339 123.309C141.138 124.181 140.997 124.734 140.577 124.901M72.2022 135.777C72.2022 135.777 75.1519 145.319 77.5345 150.2C81.0414 157.385 88.0961 163.088 92.7225 166.457C96.6763 169.336 107.53 173.284 112.84 173.734M235.798 142.826C233.333 137.238 229.178 125.13 228.185 122.205C227.118 119.063 211.366 83.2014 208.077 78.232C204.788 73.2627 198.719 72.3177 189.726 72.8274C182.531 73.2352 152.894 109.738 142.913 128.205C134.418 142.579 117.197 171.768 116.266 173.539C115.102 175.754 128.791 182.285 143.021 183.194C171.824 185.033 204.857 179.079 216.124 177.212C232.272 174.537 296.338 167.256 316.97 162.363C315.941 156.836 313.616 145.625 312.549 144.998C311.216 144.214 240.891 143.705 237.845 143.018C234.798 142.332 212.076 143.19 208.649 143.384C205.909 143.539 188.184 141.107 179.664 139.871M181.805 139.75C183.887 136.051 192.565 124.728 194.828 124.657C197.091 124.585 203.012 137.953 205.27 142.408M314.116 142.331L318.924 143.777M316.112 139.64L319.134 139.899M317.607 135.689C318.38 131.635 320.429 123.327 322.446 122.525C324.967 121.523 326.705 121.854 327.254 123.971C327.804 126.088 328.88 152.665 327.313 155.332C326.059 157.465 321.813 159.367 319.847 160.052M162.955 49.7331L162.615 43.7374M171.521 49.2477L173.419 44.8436M176.596 55.4048L181.638 53.4004"
              stroke="#1B212B"
              strokeWidth="2.23048"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* <div className="w-80 text-2xl font-semibold mt-6 lg:w-96 text-center ">
          <h3>More about me</h3>
        </div> */}
        <div className="mt-8 max-w-screen-sm px-4 sm:px-6">
          <p className="opacity-80">
            Hi, I&apos;m Jolene, a designer, researcher and tinkerer.
            <br className="sm:hidden" />
            <br className="sm:hidden" /> I value the fact that technology has
            democratized information, allowing us to interact with and learn
            from people around the world. Also, I believe in the use of
            well-designed tools so that we can spend more time on the things
            that matter.
          </p>
          <p className="mt-10 font-medium">Work stuff</p>
          <p className="mt-1 opacity-80">
            I&apos;m currently with the deliveries design team at{" "}
            <a href="https://grab.com">Grab</a>, overlooking the food, mart and
            logistic services. Here, I had the opportunity to lead design work
            ranging from feature improvements, redesigns to new products.
          </p>
          {/* <p className="mt-1 opacity-80">
            Before that, I was at Govtech, improving the government digital
            services in areas like housing and education.
          </p> */}
          <p className="mt-10 font-medium">Interests</p>
          <p className="mt-1 opacity-80">
            When I&apos;m not looking at screens, you can find me tinkering with
            3d printers, centering clay on the pottery wheel or just doodling.
          </p>
          <p className="mt-10 font-medium">This website</p>
          <p className="mt-1 opacity-80">
            I like trying out web tech that interests me and this site is my
            testing ground. You may check out the previous versions below.
          </p>
        </div>
        <div className="flex w-full mt-6 max-w-screen-sm px-4 sm:px-6">
          <div className="flex-1 mr-2">
            <a href="https://version1.joleneng.com">
              <div className="ctaparent bg-gray-50 w-full rounded-lg h-40 sm:h-52 border-2 border-gray-50 hover:border-gray-200 overflow-hidden transition duration-200 ease-in-out">
                <Image src={port1} alt="Comic Image" objectFit="cover" />
                <div className="hidden md:block bg-gray-100 w-full text-center p-3 z-50 cta">
                  <p className="text-sm font-medium">View site ↗</p>
                </div>
              </div>
            </a>
            <div className="mt-4 flex items-center">
              <p className=" text-md font-medium text-sm">Version 1</p>
              <p className="font-mono text-md opacity-40 ml-3 tracking-tight text-sm">
                2018
              </p>
            </div>
            <p className="opacity-80 mt-1 text-sm">
              Started with basics - HTML, CSS & JS
            </p>
          </div>

          <div className="flex-1 ml-2">
            <a href="https://version2.joleneng.com">
              <div className="ctaparent bg-gray-50 w-full rounded-lg h-40 sm:h-52 border-2 border-gray-50 hover:border-gray-200 overflow-hidden transition duration-200 ease-in-out">
                <Image src={port2} alt="Comic Image" objectFit="cover" />
                <div className="hidden md:block bg-gray-100 w-full text-center p-3 z-50 cta">
                  <p className="text-sm font-medium">View site ↗</p>
                </div>
              </div>
            </a>
            <div className="mt-4 flex items-center">
              <p className=" text-md font-medium text-sm">Version 2</p>
              <p className="font-mono text-md opacity-40 ml-3 tracking-tight text-sm">
                2020
              </p>
            </div>
            <p className="opacity-80 mt-1 text-sm">
              Trying out Typescript & Framer motion
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
