import ContactType from "./contact-type";
import EducationItemType from "./education-item-type";
import ProjectType from "./project-type";
import WorkHistoryItemType from "./work-history-item-type";

type CurriculumType = {
  personal: {
    title: string;
    subtitle: string;
    location: string;
    contacts: ContactType[];
  };
  side_projects: ProjectType[],
  summary: string[];
  work_history: WorkHistoryItemType[];
  education: EducationItemType[];
  technologies: string[];
};

export default CurriculumType;
