from HTMLParser import HTMLParser
import urllib

class ParseAttributes(HTMLParser):
    # Local arrays
    tagArr = []
    attrArr = []
    rhymeArr = []
    posArr = []
    # Collects unique properties and stores them in the above arrays
    def handle_starttag(self, tag, attrs):
        if tag not in self.tagArr:
            self.tagArr.append(tag)
        for attr in attrs:
            if attr[0] not in self.attrArr:
                self.attrArr.append(attr[0])
            if attr[0] == 'rhyme' and attr[1] not in self.rhymeArr:
                self.rhymeArr.append(attr[1])
            if attr[0] == 'pos' and attr[1] not in self.posArr:
                self.posArr.append(attr[1])

# Begin main section

# Global arrays
globalTagArr = []
globalAttrArr = []
globalRhymeArr = []
globalPosArr = []

# Initialize parser
parser = ParseAttributes()

# Opens all 33 poems from the web and searches for unique tags
for i in range(1, 40):
    url = 'http://hoccleve.laits.utexas.edu/output' + str(i) + '.xml'
    xml = urllib.urlopen(url)
    parser.feed(xml.read())
    # Collects tags
    tempArr = parser.tagArr
    for attr in tempArr:
        if attr not in globalTagArr:
            globalTagArr.append(attr)
    # Collects attributes
    tempArr = parser.attrArr
    for attr in tempArr:
        if attr not in globalAttrArr:
            globalAttrArr.append(attr)
    # Collects rhyme schemes
    tempArr = parser.rhymeArr
    for attr in tempArr:
        if attr not in globalRhymeArr:
            globalRhymeArr.append(attr)
    # Collects parts of speech
    tempArr = parser.posArr
    for attr in tempArr:
        if attr not in globalPosArr:
            globalPosArr.append(attr)

# Print results
print "\nTags:"
print globalTagArr

print "\nAttrbutes:"
print globalAttrArr

print "\nRhyme Schemes:"
print globalRhymeArr

print "\nParts of Speech:"
print globalPosArr
