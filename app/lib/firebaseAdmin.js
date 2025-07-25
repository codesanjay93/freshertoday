import admin from "firebase-admin";

if (!admin.apps.length) {
  const base64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;

  if (!base64) {
    throw new Error("Missing FIREBASE_SERVICE_ACCOUNT_BASE64 in .env.local");
  }

  const jsonString = Buffer.from(base64, "base64").toString("utf-8");
  const serviceAccount = JSON.parse(jsonString);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export { admin, db };
