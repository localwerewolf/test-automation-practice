// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//factory to generate pAequor specimen
const pAequorFactory = function (num, arr) {
  const pAequor = {};
  pAequor.specimenNum = num;
  pAequor.dna = arr;
  //mutate() method changes one random base within the DNA strand
  pAequor.mutate = function () {
    const randomIndex = Math.floor(Math.random() * this.dna.length);
    let newBase = returnRandBase();
    while (this.dna[randomIndex] === newBase) {
      newBase = returnRandBase();
    }
    this.dna[randomIndex] = newBase;
    return this.dna;
  };
  //compareDNA() determines the percent of bases in common between two specimen
  pAequor.compareDNA = function (pAequor) {
    let sharedDNA = 0;
    if (this.specimenNum !== pAequor.specimenNum) {
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          sharedDNA += 1;
        }
      }
    }
    sharedDNA = (sharedDNA / 15) * 100;
    sharedDNA.toFixed(2);
    console.log(`specimen 1 and specimen 2 have ${sharedDNA} % in common`);
  };
  //willLikelySurvive() determines if 60% or more bases are C or G
  pAequor.willLikelySurvive = function () {
    const countCG = this.dna.filter(
      (base) => base === "C" || base === "G").length;
    const percentageCG = (countCG / this.dna.length) * 100;
    return percentageCG >= 60;
  };
  return pAequor;
};
//function to create n specimen
const createSpecimen = (num) => {
  const specimens = [];
  for (let i = 1; i <= num; i++) {
    const strand = mockUpStrand();
    const specimen = pAequorFactory(i, strand);
    specimens.push(specimen);
  }
  return specimens;
};
//creating 30 specimen and saving them to an array
const specimenArray = createSpecimen(30);
//console.log(specimenArray);