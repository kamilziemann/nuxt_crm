export default function (event, data, query) {
  // Where query has no keys, endpoint will return all data
  if (Object.keys(query).length === 0) {
    setResponseStatus(event, 200);
    return data;
  }
  // When is no ID key in query, endpoint returns 500 status code
  if (!query.hasOwnProperty("id")) {
    setResponseStatus(event, 500, "Bad request");
    return;
  }
  // Try to find an object for the given query ID
  // If ID is not found, returns 404 status code
  const queryObj = data.find((obj) => obj.id == query.id);
  if (queryObj) {
    return queryObj;
  } else {
    setResponseStatus(event, 404, "Object Not Found");
    return;
  }
}
