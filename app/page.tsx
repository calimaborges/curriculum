import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import Viewer from "../components/viewer";
import CurriculumType from "../libs/types/curriculum-type";
import ContactType from "../libs/types/contact-type";

async function getData() {
  const curriculumDirectory = path.join(process.cwd(), "data");
  const data = yaml.load(
    await fs.promises.readFile(`${curriculumDirectory}/curriculum.yaml`, "utf8")
  ) as CurriculumType;
  const contacts = yaml.load(
    await fs.promises.readFile(`${curriculumDirectory}/contacts.yaml`, "utf8")
  ) as ContactType[];
  data.personal.contacts = contacts;
  return data as CurriculumType;
}

export default async function Page() {
  const data = await getData();
  return <Viewer data={data} />;
}
