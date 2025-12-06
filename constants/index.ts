export const subjects = [
  "maths",
  "language",
  "science",
  "history",
  "coding",
  "economics",
];

export const subjectsColors = {
  science: "#E5D0FF",
  maths: "#FFDA6E",
  language: "#BDE7FF",
  coding: "#FFC8E4",
  history: "#FFECC8",
  economics: "#C8FFDF",
};

export const voices = {
  male: { casual: "2BJW5coyhAzSr8STdHbE", formal: "c6SfcYrb2t09NHXiT80T" },
  female: { casual: "ZIlrSGI4jZqobxRKprJz", formal: "sarah" },
};

export const recentSessions = [
  {
    $id: "1",
    subject: Subject.SCIENCE,
    name: "Neura the Brainy Explorer",
    topic: "Neural Network of the Brain",
    duration: 45,
    color: "#E5D0FF",
  },
  {
    $id: "2",
    subject: Subject.MATHS,
    name: "Countsy the Number Wizard",
    topic: "Derivatives & Integrals",
    duration: 30,
    color: "#FFDA6E",
  },
  {
    $id: "3",
    subject: Subject.LANGUAGE,
    name: "Verba the Vocabulary Builder",
    topic: "English Literature",
    duration: 30,
    color: "#BDE7FF",
  },
  {
    $id: "4",
    subject: Subject.CODING,
    name: "Codey the Logic Hacker",
    topic: "Intro to If-Else Statements",
    duration: 45,
    color: "#FFC8E4",
  },
  {
    $id: "5",
    subject: Subject.HISTORY,
    name: "Memo, the Memory Keeper",
    topic: "World Wars: Causes & Consequences",
    duration: 15,
    color: "#FFECC8",
  },
  {
    $id: "6",
    subject: Subject.ECONOMICS,
    name: "The Market Maestro",
    topic: "The Basics of Supply & Demand",
    duration: 10,
    color: "#C8FFDF",
  },
];
