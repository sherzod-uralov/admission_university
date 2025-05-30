// Enum typelar
export enum EnumEduDegree {
  BACHELOR = "BACHELOR",
  MASTER = "MASTER",
}

export enum EnumEduType {
  // Kunduzgi
  FULL_TIME = "FULL_TIME",
  // Sirtqi
  PART_TIME = "PART_TIME",
  // Maxsus Sirtqi
  SPECIAL_PART_TIME = "SPECIAL_PART_TIME",
  // Kechki
  EVENING = "EVENING",
  // Masofaviy
  DISTANCE = "DISTANCE",
}

// File size interface
export interface FileSize {
  bytes: number;
  kb: string;
  mb: string;
  gb: string;
}

// Image/File interface
export interface MediaFile {
  id: string;
  file_name: string;
  file_path: string;
  is_image: boolean;
  is_audio: boolean | null;
  duration: number | null;
  content_type: string;
  extension: string;
  file_size: FileSize;
  createdAt: string;
  updatedAt: string;
}

// Education program interface
export interface EducationProgram {
  id: string;
  edu_direction_id: string;
  name: string;
  duration: number;
  price: number;
  field_code: string;
  field_lang: string;
  image_id: string;
  image: MediaFile;
  status: boolean;
  curriculum_id: string;
  curriculum: MediaFile;
  createdAt: string;
  updatedAt: string;
}

// API javobining structure
export interface EducationDirectionsResponse {
  FULL_TIME?: EducationProgram[];
  PART_TIME?: EducationProgram[];
  SPECIAL_PART_TIME?: EducationProgram[];
  EVENING?: EducationProgram[];
  DISTANCE?: EducationProgram[];
}

// Tab item interface
export interface TabItem {
  key: EnumEduType;
  label: string;
  programs: EducationProgram[];
}
