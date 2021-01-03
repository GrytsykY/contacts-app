import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { ContactsTable } from "./ContactsTable";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ToggleDataViewMode } from "./ToggleDataViewMode";
import { DATA_VIEW_MODES } from "./constants";
import { useDataViewMode } from "./useDataViewMode";
import { SpacingGrid } from "./SpacingGrid";
import { useEffect, useState } from "react";
import { BasicPagination } from "./Paginations";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    headContainer: {
      marginBottom: theme.spacing(3),
    },
  })
);

export const Contacts = () => {
  const classes = useStyles();
  const [dataViewMode, setDataViewMode] = useDataViewMode();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(8);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=200");
        const { results, error } = await response.json();
        if (error) {
          throw new Error(error);
        }
        setData(results);
        setIsLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getContacts();
  }, []);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  const totalData = data.length;

  const paginate = (numberPage) => {
    setCurrentPage(numberPage);
  };

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.headContainer}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5" component="h1">
              Contacts
            </Typography>
            <ToggleDataViewMode
              dataViewMode={dataViewMode}
              setDataViewMode={setDataViewMode}
            />
          </Box>
        </Grid>
        <Grid className="text-center" item xs={12}>
          {(() => {
            if (isLoading) {
              return <CircularProgress />;
            }

            if (isError) {
              return <div>No connection...</div>;
            }

            if (dataViewMode === DATA_VIEW_MODES.TABLE) {
              return (
                <div className="text-center">
                  <ContactsTable data={currentData} />
                  <BasicPagination
                    totalData={totalData}
                    dataPerPage={dataPerPage}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              );
            }

            if (dataViewMode === DATA_VIEW_MODES.GRID) {
              return (
                <div className="text-center">
                  <SpacingGrid data={currentData} />
                  <BasicPagination
                    totalData={totalData}
                    dataPerPage={dataPerPage}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              );
            }
            return null;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
