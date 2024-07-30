import { cn } from "@nextui-org/react";
import { ArrowDownRight } from "lucide-react";

export default (props: { title: string; color: "black" | "white" }) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center space-x-2 min-w-40  ",
        `text-${props.color}`
      )}
    >
      <div className={cn("h-4 w-4", `bg-${props.color}`)} />
      <span>{props.title}</span>
      <ArrowDownRight />
    </div>
  );
};
