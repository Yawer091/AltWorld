// import { Progress } from "@chakra-ui/react";

// interface PropsType {
//   tag: string;
//   percent: number;
//   num: number;
//   color: string;
// }

// const Topv = (props: PropsType) => {
//   return (
//     <div className="flex gap-[10px]  items-center justify-items-center">
//       <p className="text-[14px]">{props.tag}</p>
//       <Progress
//         width="50%"
//         value={props.percent}
//         colorScheme={props.color}
//         borderRadius="full"
//         bg="gray.300"
//       />
//       <p>{props.num}/10</p>
//     </div>
//   );
// };

// export default Topv;
import { Progress } from "@chakra-ui/react";

interface PropsType {
  tag: string;
  percent: number;
  num: number;
  color: string;
}

const Topv = (props: PropsType) => {
  return (
    <div className="flex items-center justify-between gap-4 my-[10px]">
      <p className="text-[14px] w-[30%] font-semibold">{props.tag}</p>
      <Progress
        flex="1"
        height="10px"
        value={props.percent}
        colorScheme={props.color}
        borderRadius="full"
        bg="gray.300"
      />
      <p
        className={`text-[14px] w-[10%] ${
          props.num > 6 ? "text-green-400" : "text-yellow-400"
        }`}
      >
        {props.num}/10
      </p>
    </div>
  );
};

export default Topv;
