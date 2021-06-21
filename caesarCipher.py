def moving_shift(s, shift):
    s = str(s)
    n = shift
    result = []
    letters = "".join(chr(x) for x in range(ord("a"), ord("z") + 1))
    for i in s:
        if i.isalpha():
            if i in letters:
                index_i = (letters.index(i)+n) % 26
                result.append(letters[index_i])
            else:
                index_i = (letters.index(i.lower()) + n) % 26
                result.append(letters[index_i].upper())
        else:
            result.append(i)
        n += 1
    cs = "".join(result)
    if len(cs)/5.0 != len(cs)//5.0: # python 2.0 to divide by 5.0
        size = len(cs)//5+1
    else:
        size = len(cs)/5.0
    result = parts(cs, int(size))
    if len(result) == 4:
        result.append("")
    return result


def parts(seq, size):
    result = []
    while seq:
        result.append(seq[:size])
        seq = seq[size:]
    return result

print(moving_shift("I should have known that you would have a perfect answer for me!!!", 1))

# def demoving_shift(s, shift):
#     ls = "".join(s)
#     n = shift
#     letters = "".join(chr(x) for x in range(ord("a"), ord("z") + 1))[::-1]
#     result = []
#     for i in ls:
#         if i.isalpha():
#             if i in letters:
#                 index_di = (letters.index(i)+n) % 26
#                 result.append(letters[index_di])
#             else:
#                 index_di = (letters.index(i.lower())+n) % 26
#                 result.append(letters[index_di].upper())
#         else:
#             result.append(i)
#         n += 1
#     return "".join(result)


