# This script prepares sample images for the Javascript implementation

from PIL import Image
import random
import os
import numpy as np
import pandas as pd
im1 = r"C:\Programming\jsclassify\assets\natcolor.jpg"


def scrape(im, top_left,):
    """Scrapes the input image for all band data from the assets directory.

    :param im: The input image object. Probably cropped.
    :param top_left: The top left coordinate tuple (x,y) of the original sample location.
    :return:
    """
    pass

def generate_samples(im, n, s_height, s_width):
    """Generates n random image samples from the input image

    :param im: The input image to generate samples from.
    :param s_height: The height of the samples.
    :param s_width: The width of the samples.
    :param b_x: Optional bounding box x variable
    :param b_y: Optional bounding box y
    """
    # Get all of the tif file locations.
    files = os.listdir("..\\assets")
    tifs = [os.path.join("..\\assets", file) for file in files if file.startswith("b") and file.endswith("TIF")]

    # Load all of the tiff image arrays
    open_tifs = [np.array(Image.open(tif)) for tif in tifs]

    # Open the image.
    im_o = Image.open(im)

    # Get the width and height of the image.
    width, height = im_o.size

    # Create pandas dataframe for holding image data

    sample_im_df = pd.DataFrame()

    for i in range(n):
        # Generate random coordinates such that the sample is guaranteed to be within
        # the bounds of the "parent" image
        rand_x, rand_y = random.randint(0, height - s_height), random.randint(0, width - s_width)
        top_left = rand_x, rand_y

        # Crop the image and save the display version
        cropped = im_o.crop((rand_x, rand_y, rand_x + s_width, rand_y + s_height))
        # cropped.save(os.path.join("samplestest", "samp{0}.jpg".format(i)))

        # Append ID column to dataframe.
        id_series = np.full((1, s_width * s_height), i)[0]
        id_col = pd.DataFrame(id_series, columns=["PictureID"])

        sample_im_df = sample_im_df.append(id_col)
        sample_im_df["x"] = np.full((1, s_width * s_height), 0)[0]
        sample_im_df["y"] = np.full((1, s_width * s_height), 0)[0]

        for tif in open_tifs:
            crop_df = pd.DataFrame(crop_arr).stack().rename_axis(['y', 'x']).reset_index(name='val')
            sample_im_df = sample_im_df.join(crop_df)

    print(sample_im_df.head())






generate_samples(im1, 3, 400, 400)
