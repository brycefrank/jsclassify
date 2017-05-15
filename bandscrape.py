import csv
from PIL import Image
import numpy as np
import os
import affine

files = os.listdir("assets")
tifs = [os.path.join("assets", file) for file in files if file.startswith("b") and file.endswith("TIF")]

# Open each tif
for tif in tifs:
    im = Image.open(tif)
    im_arr = np.array(im)

    with open("data/training.txt", "r") as trn:
        data = list(csv.reader(trn))
        for line in data:
            x = int(line[0])
            y = int(line[1])
            print(im_arr[y][x])