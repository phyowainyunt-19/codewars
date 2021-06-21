/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

*/



function domainName(url) {
    let sourceString = url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];
    let domain = sourceString.split(".")[0];
    return domain;
}

console.log(domainName("https://www.cnet.com"));

/*
return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
*/