import mongoose from 'mongoose';

const expressConnectDB = async () => {
  try {
    await mongoose.connect(('mongodb+srv://haile4cmd:xpuDTL2CCBukzV9p@skid.wi0xmjc.mongodb.net/?retryWrites=true&w=majority&appName=Skid'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } );
  } catch (err) {
    console.error(err);
  }
};

export default expressConnectDB;