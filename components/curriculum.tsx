"use client";

import {
  Page,
  Text,
  Document,
  StyleSheet,
  View,
  Link,
} from "@react-pdf/renderer";
import CurriculumType from "../libs/types/curriculum-type";
import { baseFont, boldFont } from "../libs/font-names";
import WorkHistoryItem from "./work-history-item";
import EducationItem from "./education-item";

type Props = {
  data: CurriculumType;
};

export default function Curriculum({ data }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.topSection}>
          <View>
            <Text style={styles.title}>{data.personal.title}</Text>
            <Text style={styles.subtitle}>{data.personal.subtitle}</Text>
            <Text style={styles.location}>{data.personal.location}</Text>
          </View>
          <View style={styles.contactsContainer}>
            {data.personal.contacts.map((contact) => (
              <Link src={contact.link} style={styles.contact}>
                <Text>{contact.title}</Text>
              </Link>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          {data.summary.map((s) => (
            <Text style={styles.summaryItem}>{s}</Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work History</Text>
          {data.work_history.map((item, i) => (
            <WorkHistoryItem key={i} item={item} />
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map((item, i) => (
            <EducationItem key={i} item={item} />
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technologies</Text>
          {data.technologies.map((item, i) => (
            <Text key={i} style={styles.technologieItem}>
              - {item}
            </Text>
          ))}
        </View>
        <Text style={styles.disclaimer}>
          Curriculum source code available at{" "}
          <Link src="https://github.com/calimaborges/curriculum">
            <Text>github.com/calimaborges/curriculum</Text>
          </Link>
        </Text>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: "40 50",
    fontFamily: baseFont,
  },
  location: {
    paddingTop: 3,
    fontSize: 12,
  },
  contactsContainer: {
    fontSize: 10,
    alignItems: "flex-end",
    paddingTop: 4,
  },
  contact: {
    padding: 2,
    textDecoration: "none",
  },
  summaryItem: {
    paddingVertical: 5,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 8,
  },
  title: {
    fontFamily: boldFont,
    fontSize: 24,
  },
  subtitle: {
    fontFamily: baseFont,
    fontSize: 20,
  },
  sectionTitle: {
    fontFamily: boldFont,
    paddingVertical: 5,
    fontSize: 14,
  },
  section: {
    paddingVertical: 6,
    fontSize: 12,
  },
  technologieItem: {
    paddingVertical: 1,
    fontSize: 10,
  },
  disclaimer: {
    fontSize: 10,
    paddingVertical: 8
  },
});
