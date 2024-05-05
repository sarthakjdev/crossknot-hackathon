import airtable from "airtable";
import config from "../config/config";

airtable.configure({
  endpointUrl: config.AIRTABLE_BASE_URL,
  apiKey: config.AIRTABLE_PERSONAL_ACCESS_TOKEN,
});

const base = airtable.base(config.AIRTABLE_BASE_ID);

export default base;
