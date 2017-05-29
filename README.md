# jsclassify
Javascript is a very poor language for implementing machine learning techniques on large satellite images. However, it can work (with some help from Python). This project was a learning exercise in Javascript and simple forms of machine learning and imputation. It includes two classification techniques: a single perceptron method, and a nearest neighbor algorithm. Admittedly, these techniques were the simplest part of the project, while cropping, converting and managing LANDST 8 data between Python and Javascript were by far the larger challenges.

Pixels were classified as "forested" or "non-forested" using the trainer.js script. Then, the two methods were applied to two small LANDSAT 8 scenes. 10 multispectral bands were used as the classifying data in each method.

![alt text](http://45.33.111.6/Capture.png)
