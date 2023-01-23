import { StyleSheet, Text, View } from "@react-pdf/renderer";
import ProjectType from "../libs/types/project-type";
import { boldFont, baseFont, obliqueFont } from "../libs/font-names";

type Props = { project: ProjectType }
export default function ProjectView({ project }: Props) {
  return (
    <View style={styles.container} wrap={false}>
      <View style={styles.title}>
        <Text>{project.name}</Text>
        <Text style={styles.period}>{project.starting_date} - {project.ending_date}</Text>
      </View>
      {project.url && <View style={styles.url}><Text>{project.url}</Text></View>}
      <View style={styles.body}>
        {/* <Text>Goal: {project.description}</Text> */}
        {project.outcome.map(o => <View><Text>• {o}</Text></View>)}
      </View>
      {project.tags && (
        <View style={styles.tagsContainer}>
          {project.tags.map((tag) => (
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
  url: {
    paddingBottom: 2,
    fontFamily: obliqueFont,
  },
  title: {
    paddingVertical: 2,
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: boldFont,
  },
  body: {
    paddingLeft: 8,
    fontSize: 10,
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
  period: {
    fontSize: 8,
    fontFamily: baseFont,
  },
  info: {},
  tagsContainer: {
    flexDirection: "row",
    fontSize: 8,
  },
  tag: {
    backgroundColor: "#ccc",
    margin: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    paddingBottom: 1,
    borderRadius: 5
  },
});