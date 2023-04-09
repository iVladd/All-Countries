import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="px-8 mx-auto w-full max-w-[1240px]">{children}</div>;
};

export default Wrapper;
