import * as zmq from "zeromq"

async function run() {
  const sock = new zmq.Subscriber()

  sock.connect("tcp://127.0.0.1:5000")
  sock.subscribe()
  console.log("Subscriber connected to port 5000")

  for await (const msg of sock) {
    console.log(
      "received a message:",
      msg.toString("utf8"),
    )
  }
}

run()
