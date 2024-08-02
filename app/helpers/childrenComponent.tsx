import React from "react";
interface quoteInfo {
  total_quota: string;
  uzbek_quota?: string;
  russian_quota?: string;
  english_quota?: string;
}

interface childrenProps {
  day: string;
  period: string;
  price: string;
  quota_info: quoteInfo;
  day1: string;
  period1: string;
  price1: string;
  quota2_info?: quoteInfo;
}

const ChildrenComponent = ({
  day,
  period,
  price,
  quota_info,
  day1,
  period1,
  price1,
  quota2_info,
}: childrenProps) => {
  return (
    <div className="flex max-md:flex-col items-center w-full">
      <div className="flex flex-col w-full">
        <h2 className="font-[500] max-sm:text-[20px] text-[24px] text-[#323335]">
          {price}
        </h2>
        <div className="flex items-center gap-2">
          <h2 className="text-primary font-[500] pb-1 text-[16px] max-sm:text-[14px]">
            {day}
          </h2>
          <span className="text-primary">•</span>
          <h2 className="font-[500] max-sm:text-[14px] text-[16px] text-paragraph_color">
            {period}
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 max-sm:text-[14px]  w-full">
          <h2>{quota_info.total_quota}</h2>
          <div className="flex items-center gap-3">
            <span className="border-[#D3D3D4] h-[20px] w-0 border-[1px] block" />
            <h2>{quota_info.uzbek_quota}</h2>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`${!quota_info.russian_quota && !quota_info.english_quota && "hidden"} border-[#D3D3D4] h-[20px] w-0 border-[1px] block`}
            />
            <h2>{quota_info.russian_quota || quota_info.english_quota}</h2>
          </div>
        </div>
      </div>
      {quota2_info && (
        <div className="flex max-md:flex-col items-center max-md:mt-[24px] max-md:items-start gap-5 w-full">
          <span className="border-[#D3D3D4] max-md:w-full max-md:h-0 h-[64px] max-sm:hidden w-0 border-[1px] block" />
          <div>
            <h2 className="font-[500] text-[24px] max-sm:text-[20px] text-[#323335]">
              {price1}
            </h2>
            <div className="flex items-center gap-2">
              <h2 className="text-primary font-[500] max-sm:text-[14px]  text-[16px] pb-1">
                {day1}
              </h2>
              <span className="text-primary">•</span>
              <h2 className="font-[500] max-sm:text-[14px]  text-[16px] text-paragraph_color">
                {period1}
              </h2>
            </div>
            <div className="flex items-center flex-wrap max-sm:text-[14px]  gap-3 w-full">
              <h2>{quota2_info.total_quota}</h2>
              <span className="border-[#D3D3D4] h-[20px] w-0 border-[1px] block" />
              <h2>{quota2_info.uzbek_quota}</h2>
              <span
                className={`${!quota2_info.russian_quota && !quota2_info.english_quota && "hidden"} border-[#D3D3D4] h-[20px] w-0 border-[1px] block`}
              />
              <h2>{quota2_info.russian_quota || quota2_info.english_quota}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildrenComponent;
