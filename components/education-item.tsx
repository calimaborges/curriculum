import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { boldFont, obliqueFont } from "../libs/font-names";
import EducationItemType from "../libs/types/education-item-type";

type Props = {
  item: EducationItemType;
};

export default function EducationItem({ item }: Props) {
  return (
    <View style={styles.container} wrap={false}>
      <Text>• {item.info}, {item.institute}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 10,
    paddingHorizontal: 4,
    lineHeight: 1.5,
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
