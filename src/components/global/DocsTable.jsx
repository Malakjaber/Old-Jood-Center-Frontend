import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import DownloadIcon from "@mui/icons-material/Download";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../pdf/MyDocument";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import MoreVert from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
// function labelDisplayedRows({ from, to, count }) {
//   return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
// }

// function PositionedMenu({ report }) {
//   return (
//     <Dropdown>
//       <MenuButton
//         slots={{ root: IconButton }}
//         slotProps={{ root: { variant: "outlined", color: "neutral" } }}
//       >
//         <MoreVert />
//       </MenuButton>
//       <Menu placement="bottom-end">
//         <MenuItem>
//           <PDFDownloadLink
//             className="flex items-center"
//             document={
//               <MyDocument
//                 teacherName={report.teacherName}
//                 studentName={report.stName}
//                 report={report.content}
//               />
//             }
//           >
//             <img className="w-7 h-7" src="/assets/icons/download.png" alt="" />
//             <Typography ml={1}>Download</Typography>
//           </PDFDownloadLink>
//         </MenuItem>
//         <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
//           <Typography>Preview</Typography>
//         </MenuItem>
//       </Menu>
//     </Dropdown>
//   );
// }

function EnhancedTableHead({ headCells }) {
  return (
    <thead>
      <tr>
        {headCells?.map((headCell) => {
          return (
            <th key={headCell.id}>
              <Typography underline="none" color="neutral" fontWeight="lg">
                {headCell.label}
              </Typography>
            </th>
          );
        })}
        <th>
          <Typography underline="none" color="neutral" fontWeight="lg">
            Operate
          </Typography>
        </th>
      </tr>
    </thead>
  );
}

export default function DocsTable({ rows, headCells, cellLinkTo, emptyMsg }) {
  //   const handleChangePage = (newPage) => {
  //     setPage(newPage);
  //   };

  //   const handleChangeRowsPerPage = (event, newValue) => {
  //     setRowsPerPage(parseInt(newValue.toString(), 10));
  //     setPage(0);
  //   };

  //   const getLabelDisplayedRowsTo = () => {
  //     if (rows?.length === -1) {
  //       return (page + 1) * rowsPerPage;
  //     }
  //     return rowsPerPage === -1
  //       ? rows?.length
  //       : Math.min(rows?.length, (page + 1) * rowsPerPage);
  //   };

  if (rows && !rows?.length) {
    return <Typography>{emptyMsg}</Typography>;
  }
  return (
    <Sheet
      variant="outlined"
      sx={{ width: "80%", boxShadow: "sm", borderRadius: "sm" }}
    >
      <Table
        hoverRow
        size="lg"
        sx={{
          "--TableCell-headBackground": "transparent",
          "--TableCell-selectedBackground": (theme) =>
            theme.vars.palette.success.softBg,
          "& thead th": {
            width: "20%",
            textAlign: "center",
          },
          "& thead th:last-child": {
            width: "10%",
            textAlign: "center",
          },
          "& tr > td": { textAlign: "center" },
        }}
      >
        <EnhancedTableHead headCells={headCells} />
        <tbody>
          {rows?.map((row) => (
            <tr key={row.id} className="hover:cursor-pointer">
              {headCells.map((cell) => (
                <td className="truncate ..." key={cell.id}>
                  {row[cell.id] || "-"}
                </td>
              ))}
              <td className="text-center">
                <Link
                  to={`/${cellLinkTo}/${
                    cellLinkTo !== "report" ? row.class_id : row.id
                  }`}
                >
                  <VisibilityIcon />
                </Link>
              </td>
              {/* <td>
                <PositionedMenu report={row} />
              </td> */}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          <tr>
            <td colSpan={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "flex-end",
                }}
              >
                <FormControl orientation="horizontal" size="md">
                  <FormLabel>Rows per page:</FormLabel>
                  <Select
                    onChange={handleChangeRowsPerPage}
                    value={rowsPerPage}
                  >
                    <Option value={5}>5</Option>
                    <Option value={10}>10</Option>
                    <Option value={25}>25</Option>
                  </Select>
                </FormControl> 
                 <Typography textAlign="center" sx={{ minWidth: 80 }}>
                  {labelDisplayedRows({
                    from: rows?.length === 0 ? 0 : page * rowsPerPage + 1,
                    to: getLabelDisplayedRowsTo(),
                    count: count,
                  })}
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={page === 0}
                    onClick={() => handleChangePage(page - 1)}
                    sx={{ bgcolor: "background.surface" }}
                  >
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={
                      count !== 0
                        ? page >= Math.ceil(count / rowsPerPage)
                        : false
                    }
                    onClick={() => handleChangePage(page + 1)}
                    sx={{ bgcolor: "background.surface" }}
                  >
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Box>
              </Box>
            </td>
          </tr>
        </tfoot> */}
      </Table>
    </Sheet>
  );
}
