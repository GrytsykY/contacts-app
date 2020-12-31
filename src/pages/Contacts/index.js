import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useContacts } from "./useContacts";
import { Box, Typography } from "@material-ui/core";
import { ContactsTable } from "./ContactsTable";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ToggleDataViewMode } from "./ToggleDataViewMode";
import { DATA_VIEW_MODES } from "./constants";
import { useDataViewMode } from "./useDataViewMode";
import { SpacingGrid } from "./SpacingGrid";

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
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useDataViewMode();
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
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <CircularProgress />;
            }

            if (contacts.isError) {
              return <div>No connection...</div>;
            }

            if (dataViewMode === DATA_VIEW_MODES.TABLE) {
              return <ContactsTable data={contacts.data} />;
            }

            if (dataViewMode === DATA_VIEW_MODES.GRID) {
              return <SpacingGrid data={contacts.data} />;
            }
            return null;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
