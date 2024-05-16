import SectionNav from "../../../global/SectionNav";
import { Box, Card, Sheet, Typography } from "@mui/joy";
import useGetClasses from "../../../queries/useGetClasses";

export default function ClassesSection() {
  const { classes } = useGetClasses(0, true);

  return (
    <Sheet sx={{}}>
      <SectionNav title={"Jood Classes"} />
      <Sheet
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: "2rem",
          mb: "6rem",
        }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 w-[95%]">
          {classes?.map((item) => (
            <div className="flex flex-col justify-between gap-6">
              <Card
                sx={{
                  padding: "40px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                }}
              >
                <Typography
                  level="h3"
                  sx={{ color: "#23A6F0", fontWeight: "bold" }}
                >
                  {item.className}
                </Typography>
                <Box>
                  <Typography
                    level="title-md"
                    sx={{ color: "#888888", fontWeight: "bold" }}
                  >
                    Teacher: {item.teacherName}
                  </Typography>
                  <Typography
                    level="title-md"
                    sx={{ color: "#888888", fontWeight: "bold" }}
                  >
                    Number Of Students: {item.studentCount}
                  </Typography>
                </Box>
              </Card>
            </div>
          ))}
        </div>
      </Sheet>
    </Sheet>
  );
}
