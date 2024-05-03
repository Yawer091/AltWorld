import React from "react";
import imgas from "../assets/imgas.jpg";

const data = [
  {
    image: imgas,
    name: "Saurav Singh",
    email: "saurav@gmail.com",
    progress: 78,
  },
  {
    image: imgas,
    name: "Saurav Singh",
    email: "saurav@gmail.com",
    progress: 72,
  },
  {
    image: imgas,
    name: "Saurav Singh",
    email: "saurav@gmail.com",
    progress: 64,
  },
  {
    image: imgas,
    name: "Saurav Singh",
    email: "saurav@gmail.com",
    progress: 32,
  },
  {
    image: imgas,
    name: "Saurav Singh",
    email: "saurav@gmail.com",
    progress: 44,
  },
];

const Middle = () => {
  return (
    <div className="w-[25%] px-[10px] my-[20px] bg-white rounded-[20px] ">
      <div className="p-[10px]">
        <div className="flex justify-between items-center my-[10px]">
          <h2 className="text-[26px] font-bold">Sales BDE</h2>
          <h2 className="text-green-500 text-[22px] font-semibold mr-[5px] ">
            Active{" "}
            <button className="bg-white p-[3px] rounded-[10px]">✏️</button>
          </h2>
        </div>
        <div className="m-[0px]">
          <div className="flex justify-between px-[10px] my-[5px]">
            <p>Assignment Link</p>
            <a href="#">skksks</a>
          </div>
          <div className="flex justify-between px-[10px]">
            <p>Assignment Hour</p>
            <p>3 hours</p>
          </div>
          <div className="flex justify-between px-[10px] my-[5px]">
            <p>Assignment Ends at</p>
            <p>11 March 2024</p>
          </div>
        </div>
      </div>
      <div className="flex gap-[20px] p-[10px]">
        <button className="shadow-lg bg-white p-[10px] rounded-[10px] font-semibold hover:shadow-md">
          🗃️ To Review
        </button>
        <button className="bg-none p-[10px] rounded-[10px] font-semibold hover:shadow-md">
          📁 Shortlisted
        </button>
      </div>
      <div className="flex justify-between w-[96%] p-[10px]">
        <p className="text-gray-400 uppercase">Candidate</p>
        <p className="text-gray-400 uppercase">Score</p>
      </div>
      <div className="bg-white rounded-[20px] ">
        {data.map((ele, ind) => (
          <Bake
            key={ind}
            image={ele.image}
            name={ele.name}
            email={ele.email}
            progress={ele.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default Middle;

interface BakeType {
  image: string;
  name: string;
  email: string;
  progress: number;
}

function Bake(props: BakeType) {
  return (
    <div className="flex justify-between items-center px-[20px] py-[10px]">
      <div className="flex gap-[20px]">
        <img
          src={props.image}
          width="45px"
          alt=""
          className="rounded-[10px] "
        />
        <div>
          <h3 className="font-semibold">{props.name}</h3>
          <p className="text-gray-400">{props.email}</p>
        </div>
      </div>
      <h1
        className={`font-semibold text-[22px] ${
          props.progress > 60 ? "text-green-500" : "text-yellow-500"
        }`}
      >
        {props.progress}%
      </h1>
    </div>
  );
}
// import imgas from "../assets/imgas.jpg";
// import { useState, useRef } from "react";

// export default function Mx() {
//   const [index, setIndex] = useState(0);
//   const vidRef = useRef(null);
//   const [isPlay, setIsPlay] = useState(false);
//   const [thumbnail, setThumbnail] = useState(imgas);

//   const myVid = [
//     "https://personate-data-v2.s3.amazonaws.com/website+data+/website_videos+/home_page_video.mp4",
//     "https://personate-data-v2.s3.amazonaws.com/website+data+/language_video/9824591c-8cc3-4528-a408-9abe32866a54.mp4",
//   ];

//   const handlePrev = () => {
//     setIsPlay(false);
//     if (index === 0) {
//       setIndex(myVid.length - 1);
//     } else {
//       setIndex(index - 1);
//     }
//     handlePlay();
//   };

//   const handleNext = () => {
//     setIsPlay(false);
//     if (index === myVid.length - 1) {
//       setIndex(0);
//     } else {
//       setIndex(index + 1);
//     }
//     handlePlay();
//   };

//   const handlePlay = () => {
//     if (vidRef.current) {
//       if (vidRef.current.paused) {
//         vidRef.current.play();
//         setIsPlay(true);
//       } else {
//         vidRef.current.pause();
//         setIsPlay(false);
//         captureThumbnail();
//       }
//     }
//   };

//   const captureThumbnail = () => {
//     if (vidRef.current) {
//       const canvas = document.createElement("canvas");
//       canvas.width = vidRef.current.videoWidth;
//       canvas.height = vidRef.current.videoHeight;
//       const ctx = canvas.getContext("2d");
//       ctx.drawImage(vidRef.current, 0, 0, canvas.width, canvas.height);
//       const dataURL = canvas.toDataURL();
//       setThumbnail(dataURL);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="w-full md:w-3/4 lg:w-2/3 relative">
//         <video
//           ref={vidRef}
//           className="w-full h-full"
//           src={myVid[index]}
//         ></video>
//         {!isPlay && thumbnail && (
//           <img
//             src={imgas}
//             alt="Thumbnail"
//             className="absolute inset-0 object-cover w-full h-full"
//           />
//         )}
//         <button
//           onClick={handlePlay}
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-md"
//         >
//           {isPlay ? "Pause" : "Play"}
//         </button>
//       </div>
//       <div className="mt-4 flex gap-4">
//         <button
//           onClick={handlePrev}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
