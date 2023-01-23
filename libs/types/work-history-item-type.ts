import ProjectType from "./project-type";

type WorkHistoryItemType = {
  position: string;
  company: string;
  starting_date: string;
  ending_date: string;
  type: "full time" | "part time";
  achievements: string;
  projects: ProjectType[];
}

export default WorkHistoryItemType;