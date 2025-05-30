import { useState, useEffect } from "react";
import {
  EducationDirectionsResponse,
  EducationProgram,
  EnumEduDegree,
  EnumEduType,
  TabItem,
} from "@/types/degree.types";

interface UseEducationDirectionsProps {
  eduDegree: EnumEduDegree;
  language: string;
}

export const useEducationDirections = ({
  eduDegree,
  language,
}: UseEducationDirectionsProps) => {
  const [allData, setAllData] = useState<EducationDirectionsResponse | null>(
    null,
  );
  const [currentTabData, setCurrentTabData] = useState<EducationProgram[]>([]);
  const [availableTabs, setAvailableTabs] = useState<TabItem[]>([]);
  const [activeTab, setActiveTab] = useState<EnumEduType | null>(null);
  const [loading, setLoading] = useState(true);
  const [tabLoading, setTabLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Barcha ma'lumotlarni yuklash
  useEffect(() => {
    const fetchEducationDirections = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://source.nordicuniversity.org/api/education/directions?eduDegree=${eduDegree}&language=${language}`,
        );

        console.log(response);

        if (!response.ok) {
          throw new Error("API dan ma'lumot olishda xatolik yuz berdi");
        }

        const result: EducationDirectionsResponse = await response.json();
        setAllData(result);

        // Mavjud tablarni aniqlash
        const tabs = createAvailableTabs(result);
        setAvailableTabs(tabs);

        // Birinchi mavjud tabni active qilish
        if (tabs.length > 0) {
          setActiveTab(tabs[0].key);
          setCurrentTabData(tabs[0].programs);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Noma'lum xatolik");
      } finally {
        setLoading(false);
      }
    };

    fetchEducationDirections();
  }, [eduDegree, language]);

  const createAvailableTabs = (
    data: EducationDirectionsResponse,
  ): TabItem[] => {
    const tabs: TabItem[] = [];

    Object.entries(data).forEach(([type, programs]) => {
      if (programs && programs.length > 0) {
        tabs.push({
          key: type as EnumEduType,
          label: getEducationTypeLabel(type as EnumEduType),
          programs: programs,
        });
      }
    });

    return tabs;
  };

  const getEducationTypeLabel = (type: EnumEduType): string => {
    switch (type) {
      case EnumEduType.FULL_TIME:
        return "Kunduzgi";
      case EnumEduType.PART_TIME:
        return "Sirtqi";
      case EnumEduType.SPECIAL_PART_TIME:
        return "Maxsus Sirtqi";
      case EnumEduType.EVENING:
        return "Kechki";
      case EnumEduType.DISTANCE:
        return "Masofaviy";
      default:
        return type;
    }
  };

  const changeTab = async (tabKey: EnumEduType) => {
    if (!allData || activeTab === tabKey) return;

    try {
      setTabLoading(true);
      setActiveTab(tabKey);

      // Ma'lumotlarni allData dan olish
      const tabPrograms = allData[tabKey] || [];
      setCurrentTabData(tabPrograms);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Tab ma'lumotlarini olishda xatolik",
      );
    } finally {
      setTabLoading(false);
    }
  };

  return {
    allData,
    currentTabData,
    availableTabs,
    activeTab,
    loading,
    tabLoading,
    error,
    changeTab,
    refetch: () => {
      setError(null);
      // Re-fetch logic here if needed
    },
  };
};
