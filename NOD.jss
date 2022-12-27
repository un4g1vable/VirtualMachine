setfromarg 100 3
setfromarg 101 4
сheckiflesszero 100 41
сheckiflesszero 101 41
setzeroflag 102 0
morenumber 100 101 102
substructmore 102 100 101 100
substructless 102 101 100 101
jumpifzero 100 37
jumpifzero 101 37
jump 12
outputmore 102 101
outputless 102 100
exit
exitwitherror