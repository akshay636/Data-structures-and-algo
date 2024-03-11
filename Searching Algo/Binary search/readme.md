# Binary Search

Binary Search is a searching algorithm for finding an element's position in a sorted array. It can be implemented in two ways: Iterative Method and Recursive Method.

## Binary Search Working
   ![Setting Pointers](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-initial-array.png)
1. **Initial Setup:**
   - Let `x = 4` be the element to be searched.
   - Set two pointers `low` and `high` at the lowest and the highest positions respectively.

   ![Setting Pointers](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-set-pointers.png)

2. **Finding Middle Element:**
   - Find the middle element `mid` of the array, i.e., `arr[(low + high)/2] = 6`.

   ![Mid Element](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-mid.png)

3. **Comparison:**
   - If `x == mid`, then return `mid`.
   - Else, compare the element to be searched with `mid`.
   - If `x > mid`, compare `x` with the middle element of the elements on the right side of `mid` by setting `low` to `mid + 1`.
   - Else, compare `x` with the middle element of the elements on the left side of `mid` by setting `high` to `mid - 1`.

   ![Finding Mid Element](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-find-mid.png)

4. **Repeat:**
   - Repeat steps 3 to 6 until `low` meets `high`.

   ![Mid Element](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-mid-again.png)

5. **Result:**
   - If `x = 4` is found, return the index where it was found.

   ![Found](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-found.png)

## Binary Search Algorithm

### Iterative Method

```javascript
while low <= high:
    mid = (low + high) / 2
    if x == arr[mid]:
        return mid
    elif x > arr[mid]:
        low = mid + 1
    else:
        high = mid - 1
```
### Recursive Method
```javascript
binarySearch(arr, x, low, high)
    if low > high
        return False 
    else
        mid = (low + high) / 2 
        if x == arr[mid]
            return mid
        else if x > arr[mid] // x is on the right side
            return binarySearch(arr, x, mid + 1, high)
        else // x is on the left side
            return binarySearch(arr, x, low, mid - 1)
```            