i=1
j=1
while i<10:
    j=1
    while j<=i:
        print(j,'*',i,'=',(i*j),end=' ')
        j+=1
    print('\t')
    i+=1