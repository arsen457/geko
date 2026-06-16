while True:
    try:
        x = int(input("Gri tiv: "))
        break
    except ValueError: 
        print("gri tiv voch te tar")

if x < 0:
    print("chkpav")
elif x > 0:
    print("exav")
else:
    print("zro")