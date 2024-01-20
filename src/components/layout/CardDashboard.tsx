import clsx from "clsx";
import { FC, ReactNode } from "react";

interface CardDashboard {
  children: ReactNode;
  className?: string;
}

const CardDashboard: FC<CardDashboard> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        className,
        "w-auto h-auto p-4 flex flex-col bg-white rounded-md overflow-hidden"
      )}
    >
      {children}
    </div>
  );
};

export default CardDashboard;
