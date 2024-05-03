import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import imgas from "../assets/imgas.jpg";
import Topv from "./Topv";
import { Bake } from "./Report";

const SingleUser = () => {
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
      image: imgas,
      name: "Saurav Singh",
      email: "saurav@gmail.com",
      progress: 78,
    },
  ];

  return (
    <div className="w-full bg-white shadow-lg rounded-xl flex flex-col md:flex-row gap-4">
      <div className="md:w-1/2 flex flex-col">
        <div className="p-[16px]">
          <div>
            <Bake
              image={data[0].image}
              name={data[0].name}
              email={data[0].email}
              progress={data[0].progress}
            />
          </div>
          <div className="mt-[20px] ">
            <Topv percent={90} tag="Behavioural" num={9} color="green" />
            <Topv percent={80} tag="Communication" num={8} color="green" />
            <Topv
              percent={60}
              tag="Situation Handling"
              num={6}
              color="yellow"
            />
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div>
              <h3 className="font-bold text-lg text-gray-900">About</h3>
              <p className="text-sm text-gray-600">
                Some information about John...
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Experience</h3>
              <p className="text-sm text-gray-600">John's experience...</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Hobbies</h3>
              <p className="text-sm text-gray-600">John's hobbies...</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Introduction</h3>
              <p className="text-sm text-gray-600">John's introduction...</p>
            </div>
          </div>
        </div>
        <div className="mb-5 text-center">
          <button className="bg-[#1EC3B3] text-white w-[70%] py-2 rounded-lg font-medium">
            SHORTLIST
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center p-2">
        <div className="w-full md:w-[400px] h-[400px] md:h-[600px] border rounded-lg overflow-hidden relative">
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
              className="flex items-center p-[10px] z-50 justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full absolute inset-0 text-primary bg-white text-[19px] h-[50px] w-[50px]"
            >
              <FaPlay />
            </button>
          )}

          <div className="flex justify-between absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black opacity-100 py-4 px-2">
            <div
              onClick={handlePrev}
              className="w-[50px] h-[50px] flex justify-center items-center text-[19px] text-white bg-gray-700 rounded-lg cursor-pointer"
            >
              <AiOutlineDoubleLeft />
            </div>
            <div className="text-white font-semibold text-[14px] text-center flex flex-col justify-center">
              <div>Tell me about yourself</div>
              <div className="mt-1">
                Question {index + 1}/{myVid.length}
              </div>
            </div>
            <div
              onClick={handleNext}
              className="w-[50px] h-[50px] flex justify-center items-center text-[19px] text-white bg-gray-700 rounded-lg cursor-pointer"
            >
              <AiOutlineDoubleRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
