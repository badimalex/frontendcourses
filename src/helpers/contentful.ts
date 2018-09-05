import { snakeCase, assign, reduce } from "lodash";

const contentful = require("contentful");

const client = contentful.createClient({
  space: "o2jd7hq1ac7a",
  accessToken:
    "b14cdb796bed28faea598c6c18ab89d9d71347eadc387ab82cbc11a89e24d4c0",
  host: "preview.contentful.com"
});

let initialValue: {
  [key: string]: any;
} = {};

export function fetchRequest(props: Object) {
  const obj = reduce(
    props,
    function(acc, value, key) {
      acc[snakeCase(key)] = value;
      return acc;
    },
    initialValue
  );
  return client.getEntries(obj);
}
