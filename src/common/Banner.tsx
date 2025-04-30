import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BannerProps {
  titleLines: string[];
  ctaText: string;
  imageUrl?: string;
  textColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  className?: string;
  onClick?: () => void;
}

export const Banner: React.FC<BannerProps> = ({
  titleLines,
  ctaText,
  imageUrl,
  textColor = "text-foreground",
  buttonColor = "bg-red-700",
  buttonHoverColor = "bg-primary/90",
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative container mt-10 sm:mt-20 border border-gray-50 rounded-xl sm:rounded-2xl lg:rounded-3xl",
        "w-full min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]",
        "flex items-center bg-background overflow-hidden",
        className
      )}>
      {/* Left Image - Hidden on mobile, shown on md+ */}
      {imageUrl && (
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1/3">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]">
            <Image
              src={imageUrl}
              alt="Banner visual"
              width={300}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div
        className={cn(
          "relative z-10 px-4 sm:px-6 mx-auto w-full",
          imageUrl ? "md:ml-[33%] md:w-2/3" : "text-center max-w-4xl"
        )}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "py-6 sm:py-8 lg:py-12",
            imageUrl ? "text-left" : "text-center"
          )}>
          <h1
            className={cn(
              `${textColor}`,
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
              "font-bold mb-4 sm:mb-6 lg:mb-8 leading-snug sm:leading-tight"
            )}>
            {titleLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < titleLines.length - 1 && (
                  <br className="hidden sm:inline" />
                )}
              </React.Fragment>
            ))}
          </h1>

          <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              `${buttonColor} hover:${buttonHoverColor}`,
              "text-white px-6 py-3 sm:px-8 sm:py-4",
              "rounded-md font-bold text-base sm:text-lg",
              "transition-all duration-300 shadow-lg"
            )}>
            {ctaText}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
