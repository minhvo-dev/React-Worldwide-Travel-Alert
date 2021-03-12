// const apiUrl = "http://localhost:5000/graphql";
const apiUrl = "/graphql";

const setupAlertsQuery = `
  query {
    setupAlerts
  }
`;

const alertsQuery = `
  query {
    alerts {
      country,
      name,
      text
    }
  }
`;

const travellersQuery = `
  query {
    travellers
  }
`;

const regionsQuery = `
  query {
    regions
  }
`;

const subRegionsQuery = `
  query {
    subregions
  }
`;

const alertsByRegionQuery = `
  query ($region: String!) {
    alertsByRegion (region: $region) {
      name,
      text,
      date
    }
  }
`;

const alertsBySubregionQuery = `
  query ($subregion: String!) {
    alertsBySubregion (subregion: $subregion) {
      name,
      text,
      date
    }
  }
`;

const alertsByTravellerQuery = `
  query ($traveller: String!) {
    alertsByTraveller (traveller: $traveller) {
      name,
      text,
      date
    }
  }
`;

const addAdvisoryMutation = `
  mutation (
    $travellerName: String!
    $countryName: String!
    $text: String!
    $date: String!
  ) {
    addAdvisory (
      travellerName: $travellerName
      name: $countryName
      text: $text
      date: $date
    ) {
      date
    }
  }
`;

const runGraphQLQuery = async (query, variables = {}) => {
  const response = await fetch(
    apiUrl,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query,
        variables
      }),
    }
  );
  const json = await response.json();
  return json.data;
};

export {
  setupAlertsQuery,
  alertsQuery,
  alertsByRegionQuery,
  alertsBySubregionQuery,
  alertsByTravellerQuery,
  travellersQuery,
  regionsQuery,
  subRegionsQuery,
  addAdvisoryMutation,
  runGraphQLQuery,
};