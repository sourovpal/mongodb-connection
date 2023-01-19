useNewUrlParser: true,
useUnifiedTopology: true,
serverSelectionTimeoutMS: 5000,
autoIndex: false, // Don't build indexes
maxPoolSize: 10, // Maintain up to 10 socket connections
serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
family: 4 // Use IPv4, skip trying IPv6



await mongoose.connect(remoteUrl, { 
            keepAlive: true,
            useNewUrlParser: true, 
            useUnifiedTopology: false,
            serverApi: ServerApiVersion.v1
         }, 6000000);
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log("MongoDB database connection established successfully");
        })
        
        
        
  // const remoteUrl = 'mongodb://127.0.0.1:27017/db_student';
        const remoteUrl = 'mongodb+srv://my_user_new:my_user_new@cluster0.d92no38.mongodb.net/?retryWrites=true&w=majority';
        // mongoose.connect(remoteUrl, {   
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // });
