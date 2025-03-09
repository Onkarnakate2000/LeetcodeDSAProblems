class FindMostOccurredCharacters {
    constructor(str) {
        this.object = {}; // Stores character counts
        this.str = str.toLowerCase(); // Store the input string
        this.countCharacters(); // Call function to count characters
    }

    // Function to count character occurrences
    countCharacters() {
        for (let i = 0; i < this.str.length; i++) {
            let char = this.str[i];
            if (this.object[char]) {
                this.object[char]++;
            } else {
                this.object[char] = 1;
            }
        }
    }

    // Function to get count of a specific character
    getCharacterCount(char) {
        return this.object[char] || 0; // Return count or 0 if not found
    }
}

// Create an instance of the class
const counter = new FindMostOccurredCharacters("Pranjali");

// Get count of a specific character
console.log(counter.getCharacterCount("p")); // Output: 2
