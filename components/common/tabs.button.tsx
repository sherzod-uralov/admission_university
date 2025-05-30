import React from "react";
import { EnumEduType } from "@/types/degree.types";

interface TabButtonProps {
  tabKey: EnumEduType;
  label: string;
  isActive: boolean;
  onClick: (tabKey: EnumEduType) => void;
  disabled?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({
  tabKey,
  label,
  isActive,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={() => onClick(tabKey)}
      disabled={disabled}
      className={`
        px-6 py-3 rounded-lg font-medium transition-all duration-300 
        ${
          isActive
            ? "bg-primary text-white shadow-lg transform scale-105"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {label}
    </button>
  );
};

export default TabButton;
