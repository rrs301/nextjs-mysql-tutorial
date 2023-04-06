import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: "tubeguruji.com",
    port: "3306",
    database: "u724180508_online_tuto",
    user: "u724180508_online_tuto",
    password: "#Rahul123"
  }
});


export default async function excuteQuery({ query, values }) {
    try {
      const results = await db.query(query, values);
      await db.end();
      return results;
    } catch (error) {
      return { error };
    }
  }