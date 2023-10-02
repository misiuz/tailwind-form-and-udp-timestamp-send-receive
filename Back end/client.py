import socket
import time

timeName = dict()
timeName["week"] = 604800
timeName["day"] = 86400
timeName["hour"] = 3600
timeName["minute"] = 60

client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM) # UDP
client.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
client.bind(("", 2023))
while True:
    data, addr = client.recvfrom(1024)
    serverTime = int.from_bytes(data, "big")
    localTime = int(time.time())
    difference = localTime - serverTime
    
    output = ""
    output += str(difference//timeName["week"])+ " weeks " if difference//timeName["week"] != 1 else str(difference//timeName["week"])+ " week "
    output += str(difference//timeName["day"] - difference//timeName["week"] * 7)+ " days " if difference//timeName["day"] - difference//timeName["week"] * 7 != 1 else str(difference//timeName["day"] - difference//timeName["week"] * 7)+ " day "
    output += str(difference//timeName["hour"] - difference//timeName["day"] * 24)+ " hours " if difference//timeName["hour"] - difference//timeName["day"] * 24 != 1 else str(difference//timeName["hour"] - difference//timeName["day"] * 24)+ " hour "
    output += str(difference//timeName["minute"] - difference//timeName["hour"] * 60)+ " minutes " if difference//timeName["minute"] - difference//timeName["hour"] * 60 != 1 else str(difference//timeName["minute"] - difference//timeName["hour"] * 60)+ " minute "
    output += "and "
    output += str(difference - difference//timeName["minute"] * 60)+ " seconds " if difference - difference//timeName["minute"] * 60 != 1 else str(difference - difference//timeName["minute"] * 60)+ " second "

    print("diffrence between server and client timestamp is equal ", output)
