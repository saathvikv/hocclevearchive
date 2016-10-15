from HTMLParser import HTMLParser
import urllib

class ParseAttributes(HTMLParser):
    # Stores the name of the current file
    #currentFile = '';
    # Local arrays
    tagArr = []
    attrArr = []
    rhymeArr = []
    posArr = []
    # Holds the html tags that are cropping up
    htmlTagArr = ['html','head','title','body', 'h1', 'p', 'hr', 'address']
    questionableXML = []
    
    # Sets the nameof the current file
    def setCurrentFile(self, name):
        currentFile = name
        
    # Collects unique properties and stores them in the above arrays
    def handle_starttag(self, tag, attrs):
        if tag not in self.tagArr:
            self.tagArr.append(tag)
        if tag in self.htmlTagArr and self.currentFile not in self.questionableXML:
            self.questionableXML.append(self.currentFile)
            
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
globalQuestionalXML = []

# Initialize parser
parser = ParseAttributes()

# Opens all 33 poems from the web and searches for unique tags
#for i in range(1, 40):
    #url = 'http://hoccleve.laits.utexas.edu/output' + str(i) + '.xml'
    #xml = urllib.urlopen(url)
xml = open('NewHocclexXML/SingularXML.xml')
#parser.setCurrentFile('output' + str(i) + '.xml')
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
# Collects filenames of questionable XML documents
tempArr = parser.questionableXML
for name in tempArr:
    if name not in globalQuestionalXML:
        globalQuestionalXML.append(name)

# Print results
print "\nTags:"
print globalTagArr

print "\nAttrbutes:"
print globalAttrArr

print "\nRhyme Schemes:"
print globalRhymeArr

print "\nParts of Speech:"
print globalPosArr

#print "\nQuestionable XML files:"
#print globalQuestionalXML