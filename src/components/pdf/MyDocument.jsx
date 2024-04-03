import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    color: "#333",
    border: "3px solid #333",
  },
  nav: {
    width: "100%",
    height: "120px",
    borderBottom: "3px solid #333",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navTitle: {
    paddingTop: 2,
    fontSize: "25px",
    width: "230px",
  },
  navImage: {
    alignSelf: "center",
    width: "140px",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 20,
    borderTop: "3px solid #333",
  },
});

export default function MyDocument() {
  return (
    <Document style={{ height: "950px", width: "700px" }}>
      <Page size="A4" style={styles.page}>
        <View style={styles.nav}>
          <Text style={styles.navTitle}>
            Jood Institute for Special Education
          </Text>
          <Image style={styles.navImage} src={"/assets/logo/logo2.png"}></Image>
        </View>
        <View style={styles.footer}>
          <View style={styles.info}>
            <Text style={{ fontSize: 16, color: "#252B42", marginBottom: 25 }}>
              Company Info
            </Text>
            <Text style={{ fontSize: 14, color: "#737373", marginBottom: 4 }}>
              August9,2015
            </Text>
            <Text style={{ fontSize: 14, color: "#737373" }}>
              https://www.facebook.com/jod.institute/
            </Text>
          </View>
          <View style={styles.info}>
            <Text style={{ fontSize: 16, color: "#252B42", marginBottom: 25 }}>
              Get In Touch
            </Text>
            <Text style={{ fontSize: 14, color: "#737373", marginBottom: 4 }}>
              972592770099
            </Text>
            <Text style={{ fontSize: 14, color: "#737373" }}>
              Duaa_kh_Salahat@hotmail.com
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
