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
import { baseFont, boldFont, obliqueFont } from "../libs/font-names";
import WorkHistoryItem from "./work-history-item";
import EducationItem from "./education-item";

type Props = {
  data: CurriculumType;
  language: "ptbr" | "enus";
};

export default function Curriculum({ data, language }: Props) {
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
          <Text style={styles.sectionTitle}>
            {language === "ptbr"
              ? "Resumo profissional"
              : "Professional Summary"}
          </Text>
          {data.summary.map((s) => (
            <Text style={styles.summaryItem}>{s}</Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === "ptbr" ? "Histórico de trabalho" : "Work History"}
          </Text>
          {data.work_history.map((item, i) => (
            <WorkHistoryItem key={i} item={item} language={language} />
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === "ptbr" ? "Educação" : "Education"}
          </Text>
          {data.education.map((item, i) => (
            <EducationItem key={i} item={item} />
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === "ptbr" ? "Tecnologias" : "Core Technologies"}
          </Text>
          {data.technologies.map((item, i) => (
            <Text key={i} style={styles.technologieItem}>
              • {item}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: "40 50",
    fontFamily: baseFont,
    lineHeight: 1.2,
  },
  location: {
    paddingTop: 3,
    fontSize: 10,
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
    paddingHorizontal: 2,
    fontSize: 9,
    lineHeight: 1.3,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 8,
  },
  title: {
    fontFamily: boldFont,
    fontSize: 16,
    paddingVertical: 2,
  },
  subtitle: {
    fontFamily: obliqueFont,
    fontSize: 16,
  },
  sectionTitle: {
    fontFamily: boldFont,
    paddingVertical: 5,
    fontSize: 16,
  },
  section: {
    paddingVertical: 6,
    fontSize: 12,
  },
  technologieItem: {
    paddingVertical: 1,
    paddingHorizontal: 4,
    fontSize: 9,
    lineHeight: 1.3,
  },
  disclaimer: {
    fontSize: 10,
    paddingVertical: 8,
  },
});
