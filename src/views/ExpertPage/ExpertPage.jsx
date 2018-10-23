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

const categories=gql`
query {
  categories {
    id
    name
  }
}`

const objectTypes=gql`
query {
  objectTypes {
    id
    name
  }
}`

const objectTypeCheckLists=gql`
query {
  objectTypeCheckLists {
    id
    name
  }
}`

const markTypes=gql`
query {
  markTypes {
    id
    name
  }
}`

const marks=gql`
query {
  marks {
    id
    name
  }
}`

const objectToChecks=gql`
query {
  objectToChecks {
    id
    name
  }
}`


function ExpertPage(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>
              MarkTypes
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Query
              query={markTypes}
            >
              {({ loading, error, data }) => {
                for (let key in arguments[0])
                  console.log(key, arguments[0][key]);
                console.log('data', data)
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                const tableData = data.markTypes.map(({ id, name }) => (
                  [id, name]
                ));

                return (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["id", "name"]}
                    tableData={tableData}
                  />
                );

              }}
            </Query>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>
              Marks
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Query
              query={marks}
            >
              {({ loading, error, data }) => {
                for (let key in arguments[0])
                  console.log(key, arguments[0][key]);
                console.log('data', data)
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                const tableData = data.marks.map(({ id, name }) => (
                  [id, name]
                ));

                return (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["id", "name"]}
                    tableData={tableData}
                  />
                );

              }}
            </Query>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>
              Categories
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Query
              query={categories}
            >
              {({ loading, error, data }) => {
                for (let key in arguments[0])
                  console.log(key, arguments[0][key]);
                console.log('data', data)
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                const tableData = data.categories.map(({ id, name }) => (
                    [id, name]
                  ));

                return (
                    <Table
                  tableHeaderColor="primary"
                  tableHead={["id", "name"]}
                  tableData={tableData}
                  />
                );

              }}
            </Query>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>
              ObjectTypeCheckLists
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Query
              query={objectTypeCheckLists}
            >
              {({ loading, error, data }) => {
                for (let key in arguments[0])
                  console.log(key, arguments[0][key]);
                console.log('data', data)
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                const tableData = data.objectTypeCheckLists.map(({ id, name }) => (
                  [id, name]
                ));

                return (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["id", "name"]}
                    tableData={tableData}
                  />
                );

              }}
            </Query>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>
              ObjectTypes
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Query
              query={objectTypes}
            >
              {({ loading, error, data }) => {
                for (let key in arguments[0])
                  console.log(key, arguments[0][key]);
                console.log('data', data)
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                const tableData = data.objectTypes.map(({ id, name }) => (
                  [id, name]
                ));

                return (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["id", "name"]}
                    tableData={tableData}
                  />
                );

              }}
            </Query>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>
              ObjectToChecks
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Query
              query={objectToChecks}
            >
              {({ loading, error, data }) => {
                for (let key in arguments[0])
                  console.log(key, arguments[0][key]);
                console.log('data', data)
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                const tableData = data.objectToChecks.map(({ id, name }) => (
                  [id, name]
                ));

                return (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["id", "name"]}
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

export default withStyles(styles)(ExpertPage);
