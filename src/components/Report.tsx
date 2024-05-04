import { useState, useEffect } from "react";
import imgas from "../assets/imgas.jpg";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

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

const Report = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="w-full md:w-[38%] mb-[12px] px-[10px] py-[4px] bg-white rounded-[20px]">
      <div className="px-[10px]">
        <div className="flex flex-col md:flex-row justify-between items-center my-[10px]">
          <h2 className="text-[26px] font-bold mb-2 md:mb-0">Sales BDE</h2>
          <div className="flex items-center">
            <h2 className="text-green-500 text-[22px] font-semibold mr-2 md:mr-0">
              Active
            </h2>
            <button
              className="bg-white p-[3px] ml-[3px] rounded-[10px]"
              onClick={onOpen}
            >
              ✏️
            </button>
          </div>
        </div>
        <div className="my-2 md:my-0">
          <div className="flex justify-between my-[5px]">
            <p>Assignment Link</p>
            <a
              href="https://alt-world-steel.vercel.app/"
              className="text-blue-600 underline font-semibold"
            >
              https://tiny.url/asknandna
            </a>
          </div>
          <div className="flex justify-between">
            <p>Assignment Hour</p>
            <p>3 hours</p>
          </div>
          <div className="flex justify-between my-[5px]">
            <p>Assignment Ends at</p>
            <p>11 March 2024</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[20px] p-[10px]">
        <Button
          className="shadow-lg bg-white p-[10px] rounded-[10px] font-semibold hover:shadow-md"
          onClick={onOpen}
        >
          🗃️ To Review
        </Button>
        <Button
          className="bg-none p-[10px] rounded-[10px] font-semibold hover:shadow-md"
          onClick={onOpen}
        >
          📁 Shortlisted
        </Button>
      </div>
      <div className="flex justify-between w-full md:w-[96%] p-[10px]">
        <p className="text-gray-400 uppercase">Candidate</p>
        <p className="text-gray-400 uppercase">Score</p>
      </div>
      <div className="bg-white rounded-[20px]">
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>Only ADMIN can Update this</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

interface BakeType {
  image: string;
  name: string;
  email: string;
  progress: number;
  width: number | 45;
}

export function Bake(props: BakeType) {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    let counter = 0;
    const timer = setInterval(() => {
      setCurrentProgress(() => {
        counter++;
        return counter;
      });
      if (counter >= props.progress) clearInterval(timer);
    }, 50);

    return () => clearInterval(timer);
  }, [props.progress]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center pr-[20px] py-[10px]">
      <div className="flex gap-[20px]">
        <img
          src={props.image}
          width={`${props.width || 45}px`}
          alt=""
          className="rounded-[10px] "
        />
        <div>
          <h3 className="font-semibold">{props.name}</h3>
          <p className="text-gray-400">{props.email}</p>
        </div>
      </div>
      <div className="flex items-center">
        <h1
          className={`ml-[10px] font-semibold text-[22px] ${
            currentProgress > 60 ? "text-green-500" : "text-yellow-500"
          }`}
        >
          {currentProgress}%
        </h1>
      </div>
    </div>
  );
}

export default Report;
