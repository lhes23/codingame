import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

# w: width of the building.
# h: height of the building.
w, h = [int(i) for i in input().split()]
n = int(input())  # maximum number of turns before game over.
x0, y0 = [int(i) for i in input().split()]

min_x = 0
min_y = 0
max_x = w - 1
max_y = h - 1

# game loop
while True:
    bomb_dir = input()  # the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    
    if("U" in bomb_dir):
        max_y = y0 - 1
    elif("D" in bomb_dir):
        min_y = y0 + 1
    
    if("L" in bomb_dir):
        max_x = x0 - 1
    elif("R" in bomb_dir):
        min_x = x0 + 1

    x0 = min_x + math.ceil((max_x - min_x) / 2)
    y0 = min_y + math.ceil((max_y - min_y) / 2)

    print(f"{x0} {y0}")
