def dirReduc(arr):
    dict = {"NORTH":"SOUTH","SOUTH":"NORTH","EAST":"WEST","WEST":"EAST"}
    res = []
    for i in arr:
        if res and dict[i] == res[-1]:
            res.pop()
        else:
            res.append(i)
    print(res)


dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])


# def dirReduc(arr):
#     dir = " ".join(arr)
#     dir2 = dir.replace("NORTH SOUTH",'').replace("SOUTH NORTH",'').replace("EAST WEST",'').replace("WEST EAST",'')
#     dir3 = dir2.split()
#     return dirReduc(dir3) if len(dir3) < len(arr) else dir3


