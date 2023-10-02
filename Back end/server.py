import socket
import time

server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)
server.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
server.settimeout(0.2)

while True:
    message = int(time.time()).to_bytes(4, 'big')
    server.sendto(message, ('192.168.1.255', 2023))
    time.sleep(1)