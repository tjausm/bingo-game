# Input moet volgende formaat hebben
# Op lijn 1 de titel van de kaart
# Op lijn 2 de freespace
# Op lijn 3 niets
# Op lijn 4 - x alle content, eventueel comments na een "##"
#
# Input in een map staan genaamd card-content, en .txt extensie hebben

import os

# Set locations of content, and target Javascript
path_parent = os.path.dirname(os.getcwd())
cardFolder = path_parent + "\card-content"
scriptFolder = path_parent + "\cards"

# Script will be the whole script, cards holds the card files
script = "var cards = [\n"
cards=[]

# Find all card files in \card-content, add files to cards list
for file in os.listdir(cardFolder):
    if file.endswith(".txt"):
        cards.append(cardFolder + "\\" + file)

# Read cards and write information appropriately to the script
for card in cards:
    with open(card) as file:
        # Add card name and freespace
        content = file.read().splitlines()
        output = "\t{name: \""
        output += content[0].split("##")[0] + "\", freeSquare: \"" + content[1].split("##")[0] + "\", quotes: ["
        del content [0:3]

        # Add all the square fillings
        for l in content:
            a = l.split("##")[0]
            a = a.strip()
            a = a.replace("\"", "\\\"",)    	# Add escape character to existing quotations
            output = output+ "\""+a+"\", "     	# Add comma, space and quotation

        # End the block appropriately and add the whole to the script
        output = output[:-2] + "]},\n"
        script += output

# Remove latest comma, add closing tags for whole script
script = script[:-2] + "\n]"

# Write script to card.js in /cards directory
os.chdir(scriptFolder)
f = open("cards.js", "w")
f.write(script)
f.close()
