import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const outsidePetitions=gql`
query {
  outsidePetitions {
    id
    content
    firstName
    lastName
    mark {
      name
    }
  }
}
`


function OutsidePetitionPage(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>
              OutsidePetitions
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Query
              query={outsidePetitions}
            >
              {({ loading, error, data }) => {
                for (let key in arguments[0])
                  console.log(key, arguments[0][key]);
                console.log('data', data)
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                // return (
                //   <ul key='allUsers'>
                //     {data.users.map(({ id, firstName }) => (
                //       <li key={id}>{firstName ? firstName : 'incognoito'}</li>
                //     ))}
                //   </ul>
                // );
                // console.log(data);
                const tableData = data.outsidePetitions.map(({ id, content, mark }) => (
                    [id, content, mark.name]
                  ));

                return (
                    <Table
                  tableHeaderColor="primary"
                  tableHead={["id", "comment", "mark"]}
                  tableData={tableData}
                  />
                );

              }}
            </Query>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(OutsidePetitionPage);
