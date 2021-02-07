import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { FilesViewListTableCellName } from "../styled";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const FilesViewList = ({
  filesList,
  openFolderFunc,
  activeFolder,
  activeFolderHandler,
}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell padding="checkbox"></TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filesList.map((element, index) => (
            <TableRow
              key={element._id}
              hover
              selected={element._id === activeFolder ? true : false}
              onClick={() => activeFolderHandler(element._id)}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  onClick={() => activeFolderHandler(element._id)}
                  checked={element._id === activeFolder ? true : false}
                />
              </TableCell>
              <TableCell>
                {element.type === "dir" ? (
                  <FolderIcon style={{ color: "rgba(0, 0, 0, 0.54)" }} />
                ) : (
                  <InsertDriveFileIcon
                    style={{ color: "rgba(0, 0, 0, 0.54)" }}
                  />
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                <FilesViewListTableCellName>
                  {element.name}
                </FilesViewListTableCellName>
              </TableCell>
              <TableCell align="right">{element.date}</TableCell>
              <TableCell align="right">{element.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FilesViewList;
