import React from "react";
import { Progress } from "@chakra-ui/react";

interface PropsType {
  tag: string;
  percent: number;
  num: number;
  color: string;
}

const Topv = (props: PropsType) => {
  return (
    <div className="flex justify-between items-center">
      <p>{props.tag}</p>
      <Progress
        width="300px"
        value={props.percent}
        colorScheme={props.color}
        borderRadius="full"
        bg="gray.300"
      />
      <p>{props.num}/10</p>
    </div>
  );
};

export default Topv;
