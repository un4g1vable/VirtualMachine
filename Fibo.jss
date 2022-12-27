setfromarg 100 3
set 101 0
set 102 1
checkifsetfromarglesszero 100 40
checkifsetfromarg0 100 37
checkifsetfromarg1 100 37
getcountofaddition 100
addition 101 102 103
rewrite 102 101
rewrite 103 102
getcountofaddition 100
jumpifnotzero 100 20
jump 37
output 103
exit
output 100
exit
exitwitherror