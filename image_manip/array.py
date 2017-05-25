import numpy as np

arr = np.array([[1,2,3],[4,5,6],[7,8,9]])

a = np.indices(arr.shape)

col_inds = a[0]
row_inds = a[1]

print(col_inds.reshape(col_inds.size))
print(row_inds.reshape(row_inds.size))
print(arr.reshape(arr.size))

b = arr.reshape((1, arr.size))[0]
print(b)