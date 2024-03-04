# Let’s have a look at the Big O Time Complexity of Objects and Array Methods.

# 1. Objects — Big O
```python
const wizard = {
    firstName : 'Harry'
    lastName: 'Potter',
    school: 'hogwarts'
}
```

# Insert — O(1)
# Remove — O(1)
>If you want to insert a property or remove a property from an object, the time complexity is constant which means O(1). No matter how many properties you have in the object it takes the same amount of time to remove and insert a property.

# 3. Access — O(1)

>If you want to access a property from an object, it also has the same constant time complexity.

```console.log(wizard.firstName) ```
>so if you access the object by a given key, as per the example it’s firstName, it doesn't depend on other properties in the object.

# 4. Search — O(n)

>However, if you want to search for value in an object, its time complexity is linear which means O(n).

>***The following Object methods also have linear time complexity.***

# Object.keys() — O(n)
# Object.values() — O(n)
# Object.entries() — O(n)
# 2. Arrays — Big O
```
const countries = ['New Zealand', 'Sri Lanka', 'Sweden', 'Australia']
```
# Insert / Remove at the end — O(1)
# Insert / Remove at Beginning — O(n)
# Access — O(1)
# Search — O(n)
# Push / pop — O(1)
# Shift/ unshift / concat / slice/splice — O (n)
# forEach / map/filter / reduce — O(n)