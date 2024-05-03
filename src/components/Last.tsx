import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import Vcard from "./Vcard";
// import imgas from "../assets/imgas.jpg";

interface UserDataType {
  name: string;
  email: string;
  score: number;
  behavioural: number;
  communication: number;
  situation_handling: number;
  about: string;
  experience: string;
  hobbies: string;
  introduction: string;
}

const Last = () => {
  const [index, setIndex] = useState(0);
  const vidRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setIsPlay] = useState(false);

  const myVid = [
    "https://webcdn.synthesia.io/previous2024/Homepage/Hero/q4-23/HomeVid-Matt1080p.mp4",
    "https://personate-data-v2.s3.amazonaws.com/website+data+/language_video/9824591c-8cc3-4528-a408-9abe32866a54.mp4",
    "https://webcdn.synthesia.io/v4-lp/V4-avatars/V4%20-%20Kayla.mp4#t=0.1",
    "https://webcdn.synthesia.io/v4-lp/V4-avatars/V4%20-%20Ada.mp4#t=0.1",
    "https://webcdn.synthesia.io/v4-lp/V4-avatars/V4+-+Francesca.mp4#t=0.1",
    "https://webcdn.synthesia.io/v4-lp/V4-avatars/V4+-+Julia.mp4#t=0.1",
    "https://webcdn.synthesia.io/v4-lp/V4-avatars/V4+-+Jaz.mp4#t=0.1",
    "https://webcdn.synthesia.io/previous2024/Avatars-Page/white-bkg/Lily.mp4",
    "https://webcdn.synthesia.io/previous2024/Avatars-Page/white-bkg/Alex-6.mp4",
    "https://webcdn.synthesia.io/previous2024/Avatars-Page/white-bkg/Daphne.mp4",
    "https://webcdn.synthesia.io/previous2024/Avatars-Page/white-bkg/Alex-3.mp4",
  ];

  const handlePrev = () => {
    if (index === 0) {
      setIndex(myVid.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index === myVid.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePlay = () => {
    if (vidRef.current) {
      if (vidRef.current.paused) {
        vidRef.current.play();
        setIsPlay(true);
      } else {
        vidRef.current.pause();
        setIsPlay(false);
      }
    }
  };
  const data = [
    {
      name: "About",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia inventore repudiandae ",
    },
    {
      name: "Experience",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia inventore repudiandae ",
    },
    {
      name: "Hobbies",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia inventore repudiandae ",
    },
    {
      name: "Introduction",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia inventore repudiandae ",
    },
  ];
  // const Last = () => {
  return (
    <div className="flex  bg-white w-[50%]">
      <Vcard data={data} />
      <div className="md:w-1/2 flex justify-center items-center p-2">
        <div className="w-full md:w-[400px] h-[400px] md:h-[600px] border mx-auto my-[20px] rounded-lg overflow-hidden relative">
          <video
            onClick={handlePlay}
            ref={vidRef}
            className="w-full h-full object-cover"
            src={myVid[index]}
          ></video>

          {!isPlay && (
            <button
              title="play"
              onClick={handlePlay}
              className="flex items-center z-50 justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full absolute inset-0 text-primary bg-white text-[19px] h-[50px] w-[50px]"
            >
              <FaPlay />
            </button>
          )}

          <div className="flex justify-between absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black opacity-100 py-[30px] px-[10px]">
            <div
              onClick={handlePrev}
              className="w-[50px] h-[50px] flex justify-center items-center text-[19px] text-white bg-gray-700 rounded-lg"
            >
              <AiOutlineDoubleLeft />
            </div>
            <div className="text-white font-[400] text-[13px] ">
              <div className="text-center">Tell me about yourself</div>
              <div className="text-center">
                Question {index + 1}/{myVid.length}
              </div>
            </div>
            <div
              onClick={handleNext}
              className="w-[50px] h-[50px] flex justify-center items-center text-[19px] text-white bg-gray-700 rounded-lg"
            >
              <AiOutlineDoubleRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
