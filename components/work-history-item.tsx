import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { boldFont, obliqueFont } from "../libs/font-names";
import WorkHistoryItemType from "../libs/types/work-history-item-type";

type Props = {
  item: WorkHistoryItemType;
};

export default function WorkHistoryItem({ item }: Props) {
  return (
    <View style={styles.container} wrap={false}>
      <View style={styles.header}>
        <View style={styles.jobInfo}>
          <Text style={styles.role}>{item.role}</Text>
          {item.organization && (
            <Text style={styles.organization}>at {item.organization}</Text>
          )}{" "}
        </View>
        {item.period && (
          <Text>
            {item.period.from} - {item.period.to}
          </Text>
        )}
      </View>
      {item.info && (
        <View style={styles.info}>
          {item.info.map((i) => (
            <Text>- {i}</Text>
          ))}
        </View>
      )}
      {item.achievments && (
        <View style={styles.achievments}>
          <Text style={styles.achievmentsTitle}>Achievments</Text>
          {item.achievments.map((i) => (
            <Text>- {i}</Text>
          ))}
        </View>
      )}
      {item.tags && (
        <View style={styles.tagsContainer}>
          {item.tags.map((tag) => (
            <Text key={tag} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    // borderBottom: "0.5 solid #aaa",
    fontSize: 10,
  },
  achievments: {
    paddingVertical: 2,
  },
  achievmentsTitle: {
    fontFamily: boldFont,
  },
  jobInfo: {
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  role: {
    fontFamily: boldFont,
    fontSize: 12,
  },
  organization: {
    fontFamily: obliqueFont,
  },
  info: {},
  tagsContainer: {
    paddingVertical: 2,
    flexDirection: "row",
  },
  tag: {
    backgroundColor: "#ccc",
    margin: 4,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
  },
});
