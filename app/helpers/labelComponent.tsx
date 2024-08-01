// LabelComponent.tsx
import React from "react";
import { useTranslations } from "next-intl";

interface LabelComponentProps {
  title: string;
  isActive: boolean;
  itemKey: string;
  code: string;
}

const LabelComponent: React.FC<LabelComponentProps> = ({
  title,
  isActive,
  itemKey,
  code,
}) => {
  const t = useTranslations();
  return (
    <span
      className={`transition-all flex items-center max-sm:flex-col max-sm:items-start justify-between font-[500] text-[20px] ${isActive ? "text-black" : "text-[#A0A3A9]"}`}
    >
      <span className="max-md:mr-0 max-sm:text-[20px] max-sm:order-1">
        {title}
      </span>
      <span
        // className={`text-gray-400 font-[500] text-[16px] transition-[0.2s] ${isActive ? "opacity-1" : "opacity-0"}`}
        className={`text-gray-400 font-[500] text-[16px] transition-[0.2s]`}
      >
        <strong className={`${isActive ? "text-black" : "text-[#A0A3A9]"}`}>
          {code}
        </strong>
      </span>
    </span>
  );
};

export default LabelComponent;
