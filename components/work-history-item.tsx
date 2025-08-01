import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { boldFont, obliqueFont } from "../libs/font-names";
import WorkHistoryItemType from "../libs/types/work-history-item-type";
import ProjectView from "./project-view";

type Props = {
  item: WorkHistoryItemType;
  language: "ptbr" | "enus";
};

export default function WorkHistoryItem({ item, language }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.position} </Text>
        <Text style={styles.organization}>
          | {item.company} | {item.starting_date} - {item.ending_date}
        </Text>
      </View>
      <View style={styles.body}>
        {item.achievements && (
          <View style={styles.subcontainer}>
            {item.achievements.map((achievement) => (
              <Text>• {achievement}</Text>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    paddingHorizontal: 2,
    fontSize: 10,
  },
  body: {
    paddingHorizontal: 8,
  },
  subcontainer: {
    paddingVertical: 2,
    lineHeight: 1.5,
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
    alignItems: "center",
    lineHeight: 1.5,
  },
  title: {
    fontFamily: boldFont,
  },
  organization: {},
  info: {},
});
