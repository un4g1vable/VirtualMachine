set 100 8
set 101 0
set 102 1
getcountofaddition 100
addition 101 102 103
rewrite 102 101
rewrite 103 102
counterofadditionsminus1 100
jumpifnotzero 100 11
jump 28
output 103
exit