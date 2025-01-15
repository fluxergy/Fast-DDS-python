
# RTPS React

This dummy frontend serves just to show any messages + index sent from the RTPS backend (aka whatever is receieved by the HelloWorld subcriber).
It uses Socket.io to run and should keep update to whatever was last broadcasted.
Change the socket.io 

To use, simply run 
```
npm install
```
```
npm run dev
```

Run the python subscriber script
```
python HelloWorldExample.py -p subscriber
```

and then the c++ publisher script
```
./HelloWorldExample publisher
```

And the output from the publisher script should show up on the webpage as the analyzer's "status".
Bear in mind that where you access the webpage matters as it expects a backend on your localhost:5000 (also known as 127.0.0.1:5000) so if you're accessing from another machine, machineA, then the code will attempt to reach a backend running on machineA's localhost:5000
