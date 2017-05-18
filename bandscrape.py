import csv
from PIL import Image
import numpy as np
import os
import pandas as pd

files = os.listdir("assets")
tifs = [os.path.join("assets", file) for file in files if file.startswith("b") and file.endswith("TIF")]

training_df = pd.read_csv("data/training.txt")

# Open each tif
def hold():
    for tif in tifs:
        im = Image.open(tif)
        im_arr = np.array(im)
        with open("data/training.txt", "r") as trn:
            data = list(csv.reader(trn))
            #values_arr = []
            for line in data:
                x = int(line[0])
                y = int(line[1])
                #values_arr.append(im_arr[y][x])
            print(values_arr)

# For each tiff
    # Open the tiff

xs = [training_df["x"][i] for i in range(len(training_df))]
ys = [training_df["y"][i] for i in range(len(training_df))]

for tif in tifs:
    im = Image.open(tif)
    im_arr = np.array(im)
    series = [im_arr[i[1]][i[0]] for i in zip(xs, ys)]
    training_df[tif[-7:-4]] = series

training_df.to_csv(r"data/training_final.csv")
training_df.to_json(r"uhhhh")