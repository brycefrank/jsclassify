# This script prepares sample images for the Javascript implementation

from PIL import Image
import random
import os
import numpy as np
import pandas as pd
im1 = r"C:\Programming\jsclassify\assets\natcolor.jpg"

files = os.listdir(os.path.join("..", "assets"))
band_list = [file[:3] for file in files if file.startswith("b") and file.endswith("TIF")]

def generate_samples(im, n, s_height, s_width, export = True):
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

        if export:
            cropped.save(os.path.join("samplestest", "samp{0}.jpg".format(i)))

        window = np.indices((s_height, s_width))
        col_inds = window[0].reshape(window[0].size) +rand_x
        row_inds = window[1].reshape(window[1].size)+ rand_y

        image_df = pd.DataFrame()
        image_df["x"] = pd.Series(col_inds)
        image_df["y"] = pd.Series(row_inds)
        image_df["PictureId"] = i

        for etif in enumerate(open_tifs):
            # Piece apart the enumerate
            band_id = band_list[etif[0]]
            band = etif[1]


            # Get the subset of the band array.
            crop_arr = band[top_left[1]:top_left[1] + s_height,
                       top_left[0]: top_left[0] + s_width]

            image_df["{0}".format(band_id)] = crop_arr.reshape((1, crop_arr.size))[0]


        sample_im_df = sample_im_df.append(image_df)

    return sample_im_df


samps = generate_samples(im1, 1, 400, 400, export = True)

print(samps)