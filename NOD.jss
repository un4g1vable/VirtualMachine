set 100 121
set 101 33
morenumber 100 101 102
lessnumber 100 101 103
morenumber 102 103 100
lessnumber 102 103 101
substruct 100 101 100
jumpifzero 100 31
jump 6
output 102
exit