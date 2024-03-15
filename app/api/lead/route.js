// app/api/lead/route.js
// import { MongoClient } from 'mongodb';

// // Replace 'your_connection_string' with your actual connection string
// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri);

// // Function to connect to the database
// async function runDb(callback) {
//   try {
//     await client.connect();
//     const database = client.db('your_db_name'); // Replace with your DB name
//     const collection = database.collection('leads');
//     return await callback(collection);
//   } catch (error) {
//     throw new Error('Database connection error: ' + error.message);
//   } finally {
//     await client.close();
//   }
// }

export async function POST(request) {
  try {
    // Parse the request body to get the email
    const { email } = await request.json();

    console.log('email', email);

    const isEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }


    if (!email || !isEmail(email)) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ data: { email } }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

    // // Connect to the database and insert the email
    // const result = await runDb(async (collection) => {
    //   return await collection.insertOne({ email });
    // });

    // // Return a success response
    // return new Response(JSON.stringify({ data: result }), {
    //   status: 201,
    //   headers: { 'Content-Type': 'application/json' }
    // });
  } catch (error) {
    // Return an error response
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
