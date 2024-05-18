import Grid from "@mui/joy/Grid";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { useParams } from "react-router";
import useGetClasses from "../queries/useGetClasses";
import CustomLoader from "../global/CustomLoader";
import { Sheet } from "@mui/joy";

const dataMap = (classData) => {
  const map = [
    { label: "Class Id: ", value: classData.class_id },
    { label: "Class Name: ", value: classData.className },
    { label: "Students: ", value: classData.studentCount },
    { label: "Teacher Name: ", value: classData.teacherName },
  ];
  return map;
};

export default function ClassPageLayout() {
  const { id } = useParams();

  const { classes, loading } = useGetClasses(id, true);

  if (loading) {
    return <CustomLoader />;
  }

  if (!classes.length) {
    return (
      <Sheet
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography level="h2" mb={2}>
          Class Not Found!
        </Typography>
        <Typography level="title-lg">Contact us below</Typography>
      </Sheet>
    );
  }

  const classData = classes[0];

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        p: "5rem",
      }}
    >
      <Typography
        level="h2"
        sx={{ fontFamily: "Itim", fontWeight: 500, mb: "3rem" }}
      >
        Class Details
      </Typography>
      <Grid container columns={1} rowGap={2}>
        {dataMap(classData).map(({ label, value }) => (
          <Grid xs={12}>
            <Typography
              level="title-lg"
              sx={{
                fontFamily: "Itim",
                fontWeight: 500,
                borderRadius: ".5rem",
                bgcolor: "#e0e0e0",
                width: "fit-content",
                px: "1rem",
                py: ".7rem",
              }}
            >
              {label} {value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
