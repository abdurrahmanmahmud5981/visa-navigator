import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb'

//  
dotenv.config()
const app = express();
const port = process.env.PORT || 5000;


// middelware
app.use(cors());
app.use(express.json());


// setup mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster2.xklnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Connect to the MongoDB server
async function run() {
    try {
        // await client.connect();
        // // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });

        // database creation 
        const db = client.db("visaDB"); 
        // collection creation
        const visasCollection = db.collection("visasCollection");
        const visaApplicationsCollection = db.collection("visaApplicationsCollection");



        // API 

        app.get("/allVisas", async (req, res) => {
            const visas = await visasCollection.find().sort({ Creation_date: -1 }).toArray();
            res.json(visas);
        })
        app.get("/visas-collection", async (req, res) => {
            const visas = await visasCollection.find().sort({ Creation_date: -1 }).limit(6).toArray();
            res.json(visas);
        })
        app.get("/visas-collection/:id", async (req, res) => {
            const visa = await visasCollection.findOne({ _id: new ObjectId(req.params.id) });
            res.json(visa);
        })

        // add new visa to the collection
        app.post("/addVisa", async (req, res) => {
            const newVisa = req.body;
            const result = await visasCollection.insertOne(newVisa);
            res.send(result);
        })

        // get my added Visas
        app.get("/my-added-visas/:email", async (req, res) => {
            const userEmail = req.params?.email;
            const myAddedVisas = await visasCollection.find({ User_email: userEmail }).toArray();
            res.send(myAddedVisas);
        })

        // update visa 
        app.patch("/update-visa/:id", async (req, res) => {
            const id = req.params?.id;
            const updatedVisa = req.body;
            const query = { _id: new ObjectId(id) };
            const result = await visasCollection.updateOne(query, { $set: updatedVisa });
            res.send(result)
        })

        // delete visa
        app.delete("/delete-visa/:id", async (req, res) => {
            const filter = { _id: new ObjectId(req.params.id) };
            const result = await visasCollection.deleteOne(filter);
            res.send(result);
        })


        // API For Visa Applications
        app.post("/visa-application", async (req, res) => {
            const newApplication = req.body;
            const result = await visaApplicationsCollection.insertOne(newApplication);
            res.send(result);
        })
        app.get("/visa-applications/:email", async (req, res) => {
            const userEmail = req.params?.email;
            const applications = await visaApplicationsCollection.find({ Applicant_email: userEmail }).toArray();
            res.send(applications);
        })
        app.delete("/visa-applications/:id", async (req, res) => {
            const filter = { _id: new ObjectId(req.params.id) };
            const result = await visaApplicationsCollection.deleteOne(filter);
            res.send(result);
        })







    } catch (error) {
        console.log(error.message);
    }
}

run()


app.get('/', (req, res) => {
    res.send('Visa Navigator server side is running');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

