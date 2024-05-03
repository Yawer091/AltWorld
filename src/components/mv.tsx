// // import { UserDataType } from "./Home";
// interface UserDataType {
//   id: number;
//   name: string;
//   email: string;
//   score: number;
//   behavioural: number;
//   communication: number;
//   situation_handling: number;
//   about: string;
//   experience: string;
//   hobbies: string;
//   introduction: string;
//   image: string;
// }

// export default function SingleUser({
//   name = "jhon",
//   email = "jhon",
//   score = 75,
//   behavioural = 2,
//   communication = 75,
//   situation_handling = 75,
//   about = "pskd",
//   experience = "dodod",
//   hobbies = "kdkd",
//   introduction = "dododmd",
//   image = `${imgas}`,
// }: UserDataType) {
//   return (
//     <div className="single-user bg-white shadow-[rgba(99,99,99,0.1)_0px_2px_8px_0px] rounded-xl">
//       <div className="flex flex-col sm:flex-row">
//         <div className="sm:w-[60%] lg:w-[50%] p-4 pl-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div>
//                 <img
//                   src={image}
//                   className="rounded-xl object-cover object-center w-[60px] h-[60px] md:w-[40px] md:h-[40px] lg:h-[60px] lg:w-[60px]"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <h3 className="font-bold text-[#2d384a] text-base md:text-sm lg:text-base">
//                   {name}
//                 </h3>
//                 <p className="font-medium text-[#79899e] text-sm md:text-xs lg:text-sm">
//                   {email}
//                 </p>
//               </div>
//             </div>
//             <p
//               className={`font-bold ${
//                 score > 50 ? "text-[#00BD65]" : "text-[#ebb221]"
//               } text-3xl md:text-2xl lg:text-3xl`}
//             >
//               {score}%
//             </p>
//           </div>

//           <div className="my-8 flex flex-col gap-3">
//             <div className="flex justify-between items-center">
//               <p className="text-base md:text-xs font-semibold text-[#79899e]">
//                 Behavioural
//               </p>
//               <div className="flex items-center gap-4">
//                 <div
//                   className={`w-[130px] md:w-[70px] lg:w-[130px] h-[9px] bg-[#e1e8ef] rounded-xl relative hidden sm:inline-block`}
//                 >
//                   <div
//                     style={{ width: `${behavioural * 10}%` }}
//                     className={`absolute ${
//                       behavioural > 6 ? "bg-[#00BD65]" : "bg-[#ebb221]"
//                     } h-[9px] rounded-lg`}
//                   ></div>
//                 </div>
//                 <p
//                   className={`md:text-xs font-bold ${
//                     behavioural > 6 ? "text-[#00BD65]" : "text-[#ebb221]"
//                   }`}
//                 >
//                   {behavioural}/10
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-base md:text-xs font-semibold text-[#79899e]">
//                 Communication
//               </p>
//               <div className="flex items-center gap-4">
//                 <div
//                   className={`w-[130px] md:w-[70px] lg:w-[130px] h-[9px] bg-[#e1e8ef] rounded-xl relative hidden sm:inline-block overflow-hidden`}
//                 >
//                   <div
//                     style={{ width: `${communication * 10}%` }}
//                     className={`absolute ${
//                       communication > 6 ? "bg-[#00BD65]" : "bg-[#ebb221]"
//                     } h-[9px] rounded-lg`}
//                   ></div>
//                 </div>
//                 <p
//                   className={`md:text-xs font-bold ${
//                     communication > 6 ? "text-[#00BD65]" : "text-[#ebb221]"
//                   }`}
//                 >
//                   {communication}/10
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="md:text-xs font-semibold text-[#79899e]">
//                 Situation handling
//               </p>
//               <div className="flex items-center gap-4">
//                 <div
//                   className={`w-[130px] md:w-[70px] lg:w-[130px] h-[9px] bg-[#e1e8ef] rounded-xl relative hidden sm:inline-block overflow-hidden`}
//                 >
//                   <div
//                     style={{ width: `${situation_handling * 10}%` }}
//                     className={`absolute ${
//                       situation_handling > 6 ? "bg-[#00BD65]" : "bg-[#ebb221]"
//                     } h-[9px] rounded-lg`}
//                   ></div>
//                 </div>
//                 <p
//                   className={`mdtext-xs font-bold ${
//                     situation_handling > 6 ? "text-[#00BD65]" : "text-[#ebb221]"
//                   }`}
//                 >
//                   {situation_handling}/10
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-7">
//             <div>
//               <h3 className="font-bold text-[#2d384a] text-lg ">About</h3>
//               <p className="text-xs font-medium text-[#79899e] line-clamp-2">
//                 {about}
//               </p>
//             </div>
//             <div>
//               <h3 className="font-bold text-[#2d384a] text-lg ">Experience</h3>
//               <p className="text-xs font-medium text-[#79899e] line-clamp-2">
//                 {experience}
//               </p>
//             </div>
//             <div>
//               <h3 className="font-bold text-[#2d384a] text-lg ">Hobbies</h3>
//               <p className="text-xs font-medium text-[#79899e] line-clamp-2">
//                 {hobbies}
//               </p>
//             </div>
//             <div>
//               <h3 className="font-bold text-[#2d384a] text-lg ">
//                 Introduction
//               </h3>
//               <p className="text-xs font-medium text-[#79899e] line-clamp-2">
//                 {introduction}
//               </p>
//             </div>
//           </div>
//           <div className="my-5 text-center">
//             <button className="bg-[#1EC3B3] text-white w-[70%] p-1 rounded-lg font-medium">
//               SHORTLIST
//             </button>
//           </div>
//         </div>
//         <div className="sm:w-[40%] lg:w-[50%] p-2 self-center sm:self-start">
//           {/* <img
//             src={image}
//             alt=""
//             className="rounded-lg w-[400px] h-[600px] overflow-hidden object-cover object-center"
//           /> */}
//           <TextTicker />
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState, useRef } from "react";
// import { FaPlay } from "react-icons/fa";
// import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

// export const TextTicker = () => {
//   const [index, setIndex] = useState(0);
//   const vidRef = useRef(null);
//   const [isPlay, setIsPlay] = useState(false);

//   const myVid = [
//     "https://personate-data-v2.s3.amazonaws.com/website+data+/website_videos+/home_page_video.mp4",
//     "https://personate-data-v2.s3.amazonaws.com/website+data+/language_video/9824591c-8cc3-4528-a408-9abe32866a54.mp4",
//   ];

//   const handlePrev = () => {
//     if (index === 0) {
//       setIndex(myVid.length - 1);
//     } else {
//       setIndex(index - 1);
//     }
//   };

//   const handleNext = () => {
//     if (index === myVid.length - 1) {
//       setIndex(0);
//     } else {
//       setIndex(index + 1);
//     }
//   };

//   const handlePlay = () => {
//     if (vidRef.current) {
//       if (vidRef.current.paused) {
//         vidRef.current.play();
//         setIsPlay(true);
//       } else {
//         vidRef.current.pause();
//         setIsPlay(false);
//       }
//     }
//   };

//   return (
//     <div className="w-[400px] h-[600px] border mx-auto my-[20px] rounded-lg overflow-hidden relative">
//       <video
//         onClick={handlePlay}
//         ref={vidRef}
//         className="w-full h-full object-cover"
//         src={myVid[index]}
//       ></video>

//       {!isPlay && (
//         <button
//           onClick={handlePlay}
//           className="flex items-center z-50 justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full absolute inset-0 text-primary bg-white text-[19px] h-[50px] w-[50px]"
//         >
//           <FaPlay />
//         </button>
//       )}

//       <div className="flex justify-between absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black opacity-100 py-[30px] px-[10px]">
//         <div
//           onClick={handlePrev}
//           className="w-[50px] h-[50px] flex justify-center items-center text-[19px] text-white bg-gray-700 rounded-lg"
//         >
//           <AiOutlineDoubleLeft />
//         </div>
//         <div className="text-white font-[400] text-[13px] ">
//           <div className="text-center">Tell me about yourself</div>
//           <div className="text-center">
//             Question {index + 1}/{myVid.length}
//           </div>
//         </div>
//         <div
//           onClick={handleNext}
//           className="w-[50px] h-[50px] flex justify-center items-center text-[19px] text-white bg-gray-700 rounded-lg"
//         >
//           <AiOutlineDoubleRight />
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default TextTicker;
import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import imgas from "../assets/imgas.jpg";

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

const SingleUser = ({
  name = "John",
  email = "john@example.com",
  score = 75,
  behavioural = 2,
  communication = 7,
  situation_handling = 7,
  about = "Some information about John...",
  experience = "John's experience...",
  hobbies = "John's hobbies...",
  introduction = "John's introduction...",
}: UserDataType) => {
  const [index, setIndex] = useState(0);
  const vidRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setIsPlay] = useState(false);

  const myVid = [
    "https://webcdn.synthesia.io/previous2024/Homepage/Hero/q4-23/HomeVid-Matt1080p.mp4",
    "https://personate-data-v2.s3.amazonaws.com/website+data+/language_video/9824591c-8cc3-4528-a408-9abe32866a54.mp4",
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

  return (
    <div className="w-[50%] mx-auto single-user mt-[10px] bg-white shadow-[rgba(99,99,99,0.1)_0px_2px_8px_0px] rounded-xl flex flex-col md:flex-row gap-4">
      <div className=" md:w-1/2 flex flex-col ">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div>
                <img
                  src={imgas}
                  className="rounded-full w-12 h-12 md:w-10 md:h-10 lg:h-12 lg:w-12"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-900">{name}</h3>
                <p className="text-sm text-gray-600">{email}</p>
              </div>
            </div>
            <p
              className={`font-bold text-3xl ${
                score > 50 ? "text-green-500" : "text-yellow-500"
              }`}
            >
              {score}%
            </p>
          </div>

          <div className="my-[24px] flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold text-gray-600">Behavioural</p>
              <div className="flex items-center gap-4">
                <div className="w-32 h-2 bg-gray-200 rounded-xl relative">
                  <div
                    // style={{ width: `${behavioural * 10}%` }}
                    className={`absolute h-2 rounded-lg ${
                      behavioural > 6 ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  ></div>
                </div>
                <p
                  className={`font-bold ${
                    behavioural > 6 ? "text-green-500" : "text-yellow-500"
                  }`}
                >
                  {behavioural}/10
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold text-gray-600">
                Communication
              </p>
              <div className="flex items-center gap-4">
                <div className="w-32 h-2 bg-gray-200 rounded-xl relative">
                  <div
                    // style={{ width: `${communication * 10}%` }}
                    className={`absolute h-2 rounded-lg ${
                      communication > 6 ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  ></div>
                </div>
                <p
                  className={`font-bold ${
                    communication > 6 ? "text-green-500" : "text-yellow-500"
                  }`}
                >
                  {communication}/10
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold text-gray-600">
                Situation Handling
              </p>
              <div className="flex items-center gap-4">
                <div className="w-32 h-2 bg-gray-200 rounded-xl relative">
                  <div
                    // style={{ width: `${situation_handling * 10}%` }}
                    className={`absolute h-2 rounded-lg ${
                      situation_handling > 6 ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  ></div>
                </div>
                <p
                  className={`font-bold ${
                    situation_handling > 6
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {situation_handling}/10
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div>
              <h3 className="font-bold text-lg text-gray-900">About</h3>
              <p className="text-sm text-gray-600">{about}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Experience</h3>
              <p className="text-sm text-gray-600">{experience}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Hobbies</h3>
              <p className="text-sm text-gray-600">{hobbies}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Introduction</h3>
              <p className="text-sm text-gray-600">{introduction}</p>
            </div>
          </div>
        </div>
        <div className="mb-5 text-center">
          <button className="bg-[#1EC3B3] text-white w-[70%] p-[10px] rounded-lg font-medium">
            SHORTLIST
          </button>
        </div>
      </div>
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

export default SingleUser;
