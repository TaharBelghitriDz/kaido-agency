import { memo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/react";

export const Image = memo(
  ({
    className,
    ...props
  }: { src: string; className: string } & Record<string, any>) => {
    const [isloaded, setIsloaded] = useState(false);

    const CoreImage = () => (
      <motion.img
        className={cn(className, !isloaded && "hidden")}
        alt="-"
        onLoad={() => setIsloaded(true)}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isloaded && { opacity: 1, scale: 1 }}
        {...props}
      />
    );

    if (isloaded) return <CoreImage />;

    return (
      <div className={className}>
        <Skeleton className={cn(className, isloaded && "hidden ")} />
        <CoreImage />
      </div>
    );
  }
);
