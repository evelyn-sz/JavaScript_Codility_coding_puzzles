You are given an integer m (1 � m � 1 000 000) and two non-empty, zero-indexed
arrays A and B of n integers, a0, a1, . . . , an−1 and b0, b1, . . . , bn−1 respectively (0 � ai, bi � m).
The goal is to check whether there is a swap operation which can be performed on these
arrays in such a way that the sum of elements in array A equals the sum of elements in
array B after the swap. By swap operation we mean picking one element from array A and
one element from array B and exchanging them.

Solution O(n2): The simplest method is to swap every pair of elements and calculate the
totals. Using that approach gives us O(n3) time complexity. A better approach is to calculate
the sums of elements at the beginning, and check only how the totals change during the swap
operation.

4.2: Swap the elements — O(n2).
1 def slow_solution(A, B, m):
2 n = len(A)
3 sum_a = sum(A)
4 sum_b = sum(B)
5 for i in xrange(n):
6 for j in xrange(n):
7 change = B[j] - A[i]
8 sum_a += change
9 sum_b -= change
10 if sum_a == sum_b:
11 return True
12 sum_a -= change
13 sum_b += change
14 return False

Solution O(n + m): The best approach is to count the elements of array A and calculate
the difference d between the sums of the elements of array A and B.
For every element of array B, we assume that we will swap it with some element from
array A. The difference d tells us the value from array A that we are interested in swapping,
because only one value will cause the two totals to be equal. The occurrence of this value can
be found in constant time from the array used for counting.

4.3: Swap the elements — O(n + m).
1 def fast_solution(A, B, m):
2 n = len(A)
3 sum_a = sum(A)
4 sum_b = sum(B)
5 d = sum_b - sum_a
6 if d % 2 == 1:
7 return False
8 d //= 2
9 count = counting(A, m)
10 for i in xrange(n):
11 if 0 <= B[i] - d and B[i] - d <= m and count[B[i] - d] > 0:
12 return True
13 return False