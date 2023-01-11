import asyncio
import json
import websockets

clients = set()

async def broadcast(message):
    if clients:
        print('Clients:', clients)
        print("Broadcasting message:", message)
        await asyncio.wait([client.send(message) for client in clients])

async def handle(websocket, path):
    clients.add(websocket)
    try:
        async for message in websocket:
            message = json.loads(message)
            if message['type'] == "send":
                await broadcast(json.dumps({"type": "input", "msg": message['msg']}))
            else:
                print('Received message', message)
                pass
    finally:
        clients.remove(websocket)

start_server = websockets.serve(handle, "localhost", 8080)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
