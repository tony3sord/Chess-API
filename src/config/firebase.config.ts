import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { config } from "./config";

const serviceAccount = require("../../path/to/your/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `${config.db_protocol}://${config.db_host}:${config.db_port}`,
});

const db = admin.firestore();

export { admin, db, functions };
