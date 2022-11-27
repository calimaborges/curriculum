import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { boldFont, obliqueFont } from "../libs/font-names";
import EducationItemType from "../libs/types/education-item-type";

type Props = {
  item: EducationItemType;
};

export default function EducationItem({ item }: Props) {
  return (
    <View style={styles.container} wrap={false}>
      <Text style={styles.institution}>{item.institute}</Text>
      <Text style={styles.info}>{item.info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    // borderBottom: "0.5 solid #aaa",
    fontSize: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  institution: {
    fontFamily: boldFont,
    fontSize: 12,
  },
  info: {},
});
