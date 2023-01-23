import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { boldFont, obliqueFont } from "../libs/font-names";
import WorkHistoryItemType from "../libs/types/work-history-item-type";
import ProjectView from "./project-view";

type Props = {
  item: WorkHistoryItemType;
};

export default function WorkHistoryItem({ item }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.jobInfo}>
          <Text style={styles.title}>{item.position}</Text>
          <Text style={styles.organization}>at {item.company}</Text>
        </View>
        <Text>
          {item.starting_date} - {item.ending_date}
        </Text>
      </View>
      <View style={styles.body}>
        {item.achievements && (
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>Achievments</Text>
            <Text>{item.achievements}</Text>
          </View>
        )}
        <View style={styles.subcontainer}>
          <Text style={styles.subtitle}>Projects</Text>
          {item.projects.map(project => <ProjectView project={project} />)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    paddingBottom: 5,
    borderBottom: "0.5 solid #aaa",
    fontSize: 10,
  },
  body: {
    paddingLeft: 4,
  },
  subcontainer: {
    paddingVertical: 2,
  },
  subtitle: {
    fontFamily: boldFont,
    fontSize: 12,
  },
  jobInfo: {
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  title: {
    fontFamily: boldFont,
    fontSize: 14,
  },
  organization: {
    fontFamily: obliqueFont,
  },
  info: {},
});
