import handleApiQuery from "~/server/utils/handleApiQuery.ts";
export default defineEventHandler((event) => {
  const query = getQuery(event);
  const data = [
    {
      id: 1,
      email: "user1@crm.com",
      price: "12323.21",
      productsCount: 123,
      info: "dont know what is this",
    },
    {
      id: 2,
      email: "user2@crm.com",
      price: "4616.21",
      productsCount: 456,
      info: "dont know what is this",
    },
  ];

  return handleApiQuery(event, data, query);
});
