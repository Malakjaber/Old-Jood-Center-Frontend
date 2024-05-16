import {
  Card,
  CircularProgress,
  Grid,
  Option,
  Select,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import React, { useState } from "react";
import SectionNav from "../../../global/SectionNav";
import { Link } from "react-router-dom";
import useGetJoodTeam from "../../../queries/useGetJoodTeam";
import MyPagination from "../../../global/MyPagination";
import CustomTable from "../../../global/CustomTable";

export default function JoodTeamSection() {
  const [position, setPosition] = useState("teachers");
  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { teachers, coManagers, count, loading } = useGetJoodTeam(
    position,
    rowsPerPage,
    page,
    searchTerm
  );
  return (
    <Sheet sx={{ pb: "5rem" }}>
      <SectionNav title={"Jood Team"} />
      {!loading ? (
        <Stack sx={{ p: 4 }} spacing={6}>
          <Select
            defaultValue={position}
            sx={{ width: "15rem", mb: 4 }}
            size="lg"
            onChange={(e, value) => {
              setPosition(value);
            }}
          >
            <Option value={"teachers"}>Teachers</Option>
            <Option value={"co_managers"}>Co-Managers</Option>
          </Select>
          <CustomTable
            rows={position === "teachers" ? teachers : coManagers}
            setPage={setPage}
            page={page}
            setRowsPerPage={setRowsPerPage}
            rowsPerPage={rowsPerPage}
            count={count}
          />
          {/* <Grid container columns={4} spacing={2}>
            {(teachers || coManagers).map((worker) => {
              console.log(worker);
              // return <CustomTable />;
              return (
                <Grid xs={12} sm={1}>
                  <Card
                    sx={{ height: "100%" }}
                    component={Link}
                    to={
                      position === "teachers"
                        ? `/teacher/${worker.teacher_id}`
                        : `/co_manager/${worker.id}`
                    }
                  >
                    <Stack
                      spacing={2}
                      sx={{ display: "flex", alignItems: "center" }}
                      direction={"column"}
                    >
                      <img
                        className="max-h-[35rem]"
                        src="/assets/teacher.png"
                        alt="teacher"
                      />
                      <Typography level="h4" textAlign={"center"}>
                        {worker.username}
                      </Typography>
                    </Stack>
                  </Card>
                </Grid>
              );
            })}
          </Grid> */}
          {/* {limit < count ? (
            <Sheet sx={{ display: "flex", justifyContent: "center" }}>
              <MyPagination
                handlePageChange={(e, value) => setPage(value)}
                limit={limit}
                count={count}
                page={page}
              />
            </Sheet>
          ) : null} */}
        </Stack>
      ) : (
        <Sheet
          sx={{
            width: "100vw",
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size="md" value={20} variant="soft" />
        </Sheet>
      )}
    </Sheet>
  );
}
