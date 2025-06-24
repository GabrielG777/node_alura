import mongoose from 'mongoose';

async function conectaNaDatabase() {
    await mongoose.connect(
        "mongodb+srv://gg405246:5DYiupVQEsBNPufs@cluster0.rkl38jj.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0"
    );

    return mongoose.connection;
}

export default conectaNaDatabase;
