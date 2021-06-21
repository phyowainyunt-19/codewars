import re
def domain_name(url):
    return re.search('(https?://)?(www\d?\.)?(?P<name>[\w-]+)\.', url).group('name')

print(domain_name('www.google.com'))


# def domain_name(url):
#     url = url.replace('www.','')
#     url = url.replace('https://','')
#     url = url.replace('http://','')
    
#     return url[0:url.find('.')]